import busboy from 'busboy';
import { put } from '@vercel/blob';

export const config = { api: { bodyParser: false } };

function parseForm(req) {
  return new Promise((resolve, reject) => {
    const fields = {};
    let fileBuffer = null, fileName = null, fileMime = null;

    const bb = busboy({ headers: req.headers, limits: { fileSize: 5 * 1024 * 1024 } });

    bb.on('field', (name, val) => {
      if (fields[name]) {
        fields[name] = Array.isArray(fields[name]) ? [...fields[name], val] : [fields[name], val];
      } else {
        fields[name] = val;
      }
    });

    bb.on('file', (name, stream, info) => {
      fileName = info.filename;
      fileMime = info.mimeType;
      const chunks = [];
      stream.on('data', chunk => chunks.push(chunk));
      stream.on('end', () => { fileBuffer = Buffer.concat(chunks); });
    });

    bb.on('finish', () => resolve({ fields, fileBuffer, fileName, fileMime }));
    bb.on('error', reject);
    req.pipe(bb);
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  const BASE_ID = 'appzQL8dEZizmhgOR';

  if (!AIRTABLE_API_KEY) return res.status(500).json({ error: 'Server configuration error.' });

  try {
    const { fields, fileBuffer, fileName, fileMime } = await parseForm(req);
    const { name, email, linkedin, statement, referral, roleTitle } = fields;
    const mailingList     = fields.mailingList === "yes";
    const shareWithAllies = fields.shareWithAllies === "yes";

    const roleTypes = fields.roleTypes
      ? (Array.isArray(fields.roleTypes) ? fields.roleTypes : [fields.roleTypes]) : [];
    const engagementTypes = fields.engagementTypes
      ? (Array.isArray(fields.engagementTypes) ? fields.engagementTypes : [fields.engagementTypes]) : [];

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }

    let resumeUrl = null;
    if (fileBuffer && fileName) {
      const blob = await put(`resumes/${Date.now()}-${fileName}`, fileBuffer, {
        access: 'public',
        contentType: fileMime || 'application/octet-stream',
      });
      resumeUrl = blob.url;
    }

    const airtableFields = {
      'Name':    name,
      'Email':   email,
      'Status':  'New',
      'Submitted Date': new Date().toISOString().slice(0, 10),
    };

    if (statement)             airtableFields['Statement'] = statement;
    if (linkedin)              airtableFields['LinkedIn'] = linkedin;
    if (resumeUrl)             airtableFields['Resume or Portfolio Link'] = resumeUrl;
    if (referral)              airtableFields['Referral Source'] = referral;
    if (roleTitle)             airtableFields['Applied For Role'] = roleTitle;
    if (roleTypes.length)      airtableFields['Role Types'] = roleTypes;
    if (engagementTypes.length) airtableFields["Engagement Types"] = engagementTypes;
    if (mailingList)      airtableFields["Mailing List"] = true;
    if (shareWithAllies)  airtableFields["Share with Alliance"] = true;

    const response = await fetch(
      `https://api.airtable.com/v0/${BASE_ID}/Candidates`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fields: airtableFields }),
      }
    );

    if (!response.ok) {
      const err = await response.json();
      console.error('Airtable error:', err);
      return res.status(500).json({ error: 'Failed to save submission.' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Submission error:', err);
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
}

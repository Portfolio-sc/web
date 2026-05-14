export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  const BASE_ID = 'appzQL8dEZizmhgOR';

  if (!AIRTABLE_API_KEY) return res.status(500).json({ error: 'Server configuration error.' });

  const { idea, email } = req.body;

  if (!idea) return res.status(400).json({ error: 'Idea is required.' });

  const fields = {
    'Idea': idea,
    'Status': 'New',
    'Submitted Date': new Date().toISOString().split('T')[0],
  };
  if (email) fields['Email'] = email;

  const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Ideas`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields }),
  });

  if (!response.ok) {
    const err = await response.json();
    console.error('Airtable error:', err);
    return res.status(500).json({ error: 'Failed to save idea.' });
  }

  return res.status(200).json({ success: true });
}

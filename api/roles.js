export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  const BASE_ID = 'appzQL8dEZizmhgOR';
  if (!AIRTABLE_API_KEY) return res.status(500).json({ error: 'Server configuration error.' });

  // audience param: All | New_Public | Portfolio
  const audience = req.query.audience || 'All';

  try {
    const formula = '{Status}="Active"';
    const url = `https://api.airtable.com/v0/${BASE_ID}/Roles`
      + `?filterByFormula=${encodeURIComponent(formula)}`
      + `&sort[0][field]=Posted%20Date&sort[0][direction]=desc`;
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` },
    });
    if (!response.ok) {
      const err = await response.json();
      console.error('Airtable error:', err);
      return res.status(500).json({ error: 'Failed to fetch roles.' });
    }
    const data = await response.json();
    const roles = (data.records || [])
      .filter(r => {
        const audiences = (r.fields['Audience'] || []).map(a => typeof a === 'object' ? a.name : a);
        return audiences.includes(audience);
      })
      .map(r => ({
        id:          r.id,
        title:       r.fields['Role Title']            || '',
        type:        r.fields['Type']                  || 'Stealth',
        org:         r.fields['Publicly Associated Org'] || null,
        category:    r.fields['Role Category']         || '',
        description: r.fields['Description']           || '',
        postedDate:  r.fields['Posted Date']           || null,
      }));
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    return res.status(200).json(roles);
  } catch (err) {
    console.error('Roles fetch error:', err);
    return res.status(500).json({ error: 'Server error.' });
  }
}

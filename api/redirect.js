export default function handler(req, res) {
  // Direct redirect to your website - NO PAGE VISIBLE
  const targetUrl = 'https://yt.webbloggin.online/nevir/';
  
  res.writeHead(301, {
    'Location': targetUrl,
    'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    'CDN-Cache-Control': 'public, max-age=86400',
    'Vercel-CDN-Cache-Control': 'public, max-age=86400'
  });
  res.end();
}

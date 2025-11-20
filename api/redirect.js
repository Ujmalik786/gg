export default function handler(req, res) {
    res.writeHead(302, {
        'Location': 'https://yt.webbloggin.online/nevir/',
        'Cache-Control': 'no-cache'
    });
    res.end();
}

export default function handler(req, res) {
    res.setHeader('Location', 'https://yt.webbloggin.online/nevir/');
    res.status(302).end();
}

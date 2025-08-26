export default function handler(req, res) {
  res.writeHead(302, {
    Location: 'https://wa.me/5511946257646?text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20uma%20simula%C3%A7%C3%A3o.',
  });
  res.end();
}
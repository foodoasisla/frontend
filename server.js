const compression = require('compression');
const express = require('express');

const ONE_WEEK = 604800;
const ONE_WEEK_MS = ONE_WEEK / 1000;

const app = express();

app.use(compression());
app.use(express.static('./', { maxAge: ONE_WEEK_MS }));
app.use(express.static('dist', { maxAge: ONE_WEEK_MS }));

function ensureSecure(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    return next();
  }

  return res.redirect(`https://${req.hostname}${req.url}`);
}

app.get('*', ensureSecure, (req, res) => {
  res.set({ 'Cache-Control': `public, max-age=${ONE_WEEK}` });
  res.sendFile(`${__dirname}/dist/app.html`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('app listening on', port);
});

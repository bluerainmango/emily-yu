const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Send herokuapp.com / www / http traffic to the canonical domain (e.g. CANONICAL_HOST=emily-yu.dev).
// Only active when the config var is set, so it can be turned on after the custom domain's HTTPS works.
const canonicalHost = process.env.CANONICAL_HOST;
if (canonicalHost) {
	app.use(function (req, res, next) {
		const isHttps = req.get('x-forwarded-proto') === 'https';
		if (req.hostname !== canonicalHost || !isHttps) {
			return res.redirect(301, `https://${canonicalHost}${req.originalUrl}`);
		}
		next();
	});
}

// Your static pre-build assets folder
app.use(express.static(path.join(__dirname, '..', 'build')));

// Any Page Redirects to the pre-build assets folder index.html that // will load the react app
// (Express 5 requires a named wildcard; '/' itself is served by express.static above)
app.get('/{*splat}', function (req, res) {
	res.sendFile(path.join(__dirname, '..', 'build/index.html'));
});

app.listen(port, () => {
	console.log('Server is running on port: ', port);
});

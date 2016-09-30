const path = require('path');

const ROOT = path.join(process.cwd());
const DIST = path.join(ROOT, 'dist');
const CLIENT = path.join(ROOT, 'client');
const ASSETS = path.join(CLIENT, 'assets');
const ICONS = path.join(ASSETS, 'icons');

module.exports = { ROOT, CLIENT, DIST, ICONS };

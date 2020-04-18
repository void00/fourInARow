// Import express
express = require('express');
// Create aweb server
const app = express();
// use folder www
app.use(express.static('www'));
// use on port 3000, ink callback as info for user
app.listen(3000, () => console.log('Listening on port 3000'));
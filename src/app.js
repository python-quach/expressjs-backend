import 'dotenv/config.js';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.json({ msg: 'Hello' });
});

app.get('/hello', function (req, res) {
    res.json({ msg: 'Hello' });
});

app.get('/dashboard', function (req, res) {
    res.json({ msg: 'Hello' });
});

app.listen(port, function () {
<<<<<<< HEAD
    console.log('express server backend running on port', port);
=======
    console.log('express server running on port local asshole', port);
>>>>>>> basic-express-server
});

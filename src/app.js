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
    console.log('express server backend running on localhost port', port);
});

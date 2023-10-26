const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.send(`
    <h1>This is home page</h1>
    <a href='/about?name=musa'>go to about page</a>
    `);
});

app.get('/about', (req, res) => {
    console.log("data send by browser =", req.query.name);
    res.send(`
     <h1>This is About page</h1>
     `);
});

app.get('/login', (req, res) => {
    resp.send('This is login page');
});

app.get('/test', async (req, res) => {
    res.status(200).json({ name: 'musa', mobile: '1234567890' });
});

app.get('*', (req, resp) => {
    res.send('This is error page');
});

app.listen(4100);
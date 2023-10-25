const express=require('express');
const app=express();

app.get('/home',(req,resp)=>{
    resp.send(`
    <h1>This is home page</h1>
    <a href='/about?name=musa'>go to about page</a>
    `);
});

app.get('/about',(req,resp)=>{
    console.log("data send by browser =",req.query.name);
    resp.send('This is About page');
});

app.get('/login',(req,resp)=>{
    resp.send('This is login page');
});

app.get('*',(req,resp)=>{
    resp.send('This is error page');
});


app.listen(4100);
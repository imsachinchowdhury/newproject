const express = require('express');
const app = express();
const path = require('path');
const hbs = require("hbs");

const templatepath = path.join(__dirname,"../template/views"); 
const partialsPath = path.join(__dirname,"../template/partials");
const publicPath = path.join(__dirname,"../public");


app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));



app.get("/",(req,res)=>{
    res.render('index');
}).listen(8000);

const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const port = process.env.PORT || 8000;
// const port = process.env.PORT || 8000;
// const port = process.env.PORT || 8000;
// const port = process.env.PORT || 8000;


const static_path = path.join(__dirname,"../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname,"../templates/partials") 

app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath);

app.use(express.static(static_path));

app.get("/", (req,res)=>{
    res.render("index.hbs");
})
app.get("/about", (req,res)=>{
    res.render("about.hbs");
})
app.get("/weather", (req,res)=>{
    res.render('weather');
})
app.get('*',(req,res)=>{
	res.render('404error' , {
        errorMsg:"Oops! Page not found"
    })

});


app.listen(port, ()=>{
    console.log(`Running in port ${port}`);
})


const express = require("express");
const app = express();
const path = require("path");
let ejs = require('ejs');


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.engine('.ejs', ejs.__express);
app.set('views', path.join(__dirname, 'pages'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


// meta content
app.get("/meta-content", (req, res)=>{
    let query = req.query;
    let title = "";
    if (query.route == "") {
        title = "Home";
    }else if(query.route == "about"){
        title = "About";
    }else if(query.route == "privacy"){
        title = "Privacy";
    }else if(query.route == "contact"){
        title = "Contact";
    }

    res.render("inc/meta-content", {title: title});
})
// meta content


// components
app.get("/components/header", (req, res)=>{
    console.log(req.query);
    res.render("components/header-component");
});
app.get("/components/index", (req, res)=>{
    res.render("components/index-component", {l: "he"});
});
app.get("/components/about", (req, res)=>{
    res.render("components/about-component");
});
app.get("/components/privacy", (req, res)=>{
    res.render("components/privacy-component");
});
app.get("/components/contact", (req, res)=>{
    res.render("components/contact-component");
});
// components



app.get("/", (req, res)=>{
    res.render("root");
})

app.get("/about", (req, res)=>{
    res.render("root");
})
app.get("/privacy", (req, res)=>{
    res.render("root");
})
app.get("/contact", (req, res)=>{
    res.render("root");
})

app.listen(3000, ()=>{
    console.log("Server listen on 3000");
})
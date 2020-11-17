// Imports
const express = require('express');
const ejs = require('ejs');
const session = require('express-session');
const bodyParser = require('body-parser');
const ash = require('express-async-handler');
const path = require('path');

// Express Application
const app = express();
const listenAddress = "0.0.0.0";
const port = 3000;

// Set view engine to ejs for template rendering
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

// Set session usage to track account logins
app.use(session({
    secret: Math.random().toString(),
    resave: true,
    saveUninitialized: false
}));

// Set public directory for static content
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    if (req.session.isSet === undefined) {
        req.session.isLoggedIn = false;
        req.session.isSet = true;
    }
    next();
});

// Begin Routes
app.get("/", (req, res) => {
    res.redirect("/home");
});

app.get("/home", (req, res) => {
    res.set('Cache-control', `no-store`);
    res.render('pages/home', req.session);
});

app.get("/login", (req, res) => {
    res.set('Cache-control', `no-store`);
    res.render('pages/login', req.session);
});

app.get("/forgot", (req, res) => {
    res.set('Cache-control', `no-store`);
    res.render('pages/forgot', req.session);
});

app.get("/signup", (req, res) => {
    res.set('Cache-control', `no-store`);
    res.render('pages/signup', req.session);
});

app.get("/dashboard", (req, res) => {
    res.set('Cache-control', `no-store`);
    res.render('pages/dashboard', req.session);
});

app.get("/contact", (req, res) => {
    res.set('Cache-control', `no-store`);
    res.render('pages/contact', req.session);
});

app.get("/about", (req, res) => {
    res.set('Cache-control', 'no-store');
    res.render('pages/about', req.session);
});

app.get("/map", (req, res) => {
    res.set('Cache-control', `no-store`);
    res.render('pages/map', req.session);
});

app.get("/request", (req, res) => {
    res.set('Cache-control', `no-store`);
    res.render('pages/request', req.session);
});

app.get("/supply", (req, res) => {
    res.set('Cache-control', `no-store`);
    res.render('pages/supply', req.session);
});

app.get("/report", (req, res) => {
    res.set('Cache-control', `no-store`);
    res.render('pages/report', req.session);
});

app.get("/successful", (req, res) => {
    res.set('Cache-control', `no-store`);
    res.render('pages/successful', req.session);
});

app.get("/task_login", (req, res) => {
    res.set('Cache-control', `no-store`);
    req.session.isLoggedIn = true;
    res.redirect("/dashboard");
});

app.get("/logout", (req, res) => {
    res.set('Cache-control', `no-store`);
    req.session.destroy();
    res.redirect("/home");
});

app.listen(port, listenAddress, () => {
    console.log(`Application listening on ${listenAddress}:${port}`);
});

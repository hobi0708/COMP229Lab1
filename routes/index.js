/*
File Name: style.css
Student's Name: Jongyoon Ko
Student Number: 300933882
Date: 07/Oct/2023
*/

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('aboutMe', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Projects' });
});

router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Me' });
});

module.exports = router;

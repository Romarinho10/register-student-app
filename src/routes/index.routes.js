//require express to define url's

const { Router } = require('express');
const { model } = require('mongoose');
const Student = require('../models/student');
const router = Router();

router.get('/', (req, res) =>{
    res.render('index', { title: 'Registrar Alumno | FERUZ' });
});

router.post('/', (req, res) =>{
    let body = req.body;
    body.status = false;

    Student.create(body, (err, Student) =>{
        if (err){
            //throw err;
            res.redirect('/error');
        } else{
            res.redirect('/registred');
        }
        
    });
});

router.get('/registred', (req, res) =>{
    res.render('registred', { title: 'Alumno Registrado | FERUZ'});
});

router.get('/error', (req, res) =>{
    res.render('error', { title: 'Error | FERUZ'});
});

module.exports = router;



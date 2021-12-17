const express = require('express');
const router = express.Router();
const Campus = require('./models/campus');
const Docent = require('./models/docent');

router.get('/', (req, res) => {
    console.log('/ route called');
    res.send('<h1>Welcome to the API, these are the available routes:</h1><br/>' +
        '<h2>/campus</h2><br/><p>Returns a list of all campuses</p><br/><br/>' +
        '<h2>/campus/id</h2><br/><p>Returns a specific campus</p><br/><br/>' +
        '<h2>/campus/create</h2><br/><p>Creates a new campus</p><br/><br/>' +
        '<h2>/campus/update/id</h2><br/><p>Updates a specific campus with new data</p><br/><br/>' +
        '<h2>/campus/delete/id</h2><br/><p>Deletes a specific campus</p><br/><br/>' +
        '<h2>/docent</h2><br/><p>Returns a list of all "docenten" ordered by firstname</p>');
})

router.get('/campus', async(req, res) => {
    console.log('/campus route called');
    try {
        res.json(await Campus.find());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/campus/:id', async(req, res) => {
    console.log('/campus/:id route called');
    try {
        res.json(await Campus.findById(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/campus/create', async(req, res) => {
    console.log('/campus/create route called');
    try {
        res.json(await Campus.create(req.body));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/campus/update/:id', async(req, res) => {
    console.log('/campus/update/:id route called');
    try {
        res.json(await Campus.findByIdAndUpdate(req.params.id, { $set: req.body }));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/campus/delete/:id', async(req, res) => {
    console.log('/campus/delete/:id route called');
    try {
        res.json(await Campus.findByIdAndDelete(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

/*Return docenten*/
router.get('/docent', async(req, res) => {
    console.log('/docent route called');
    try {
        res.json(await Docent.find().populate('campussen').sort('voornaam'));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;
const express = require('express'),
    path = require('path'),
    ExpressError = require('../utils/ExpressError'),
    { sendMail } = require('../utils/sendMessage');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/experience', (req, res) => {
    res.render('experience');
});

router.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

router.get('/cv', (req, res) => {
    res.render('cv');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/download', function (req, res, next) {
    const file = path.join(__dirname, '../public/files/');
    const fileName = process.env.CV_FILE_NAME;
    res.download(file + fileName, fileName, (err) => {
        if (err) {
            next(new ExpressError('Something went wrong', 500));
        }
    });
});

router.post('/sendMessage', async function (req, res, next) {
    console.log('Received message: ');
    console.log(req.body);
    try {
        await sendMail(req);
        res.send({ result: "success" });
    } catch (e) {
        next(new ExpressError('Something went wrong', 500));
    }
});

module.exports = router;
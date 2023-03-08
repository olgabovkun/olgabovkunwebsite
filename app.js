const express = require('express'), 
    path = require('path'), 
    engine = require('ejs-mate'),
    app = express(),
    routes = require('./routes/routes'),
    ExpressError = require('./utils/ExpressError');
require('dotenv').config();

console.log(process.env);

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', routes);

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
});

app.use((err, req, res, next) => {
    const { status = 500 } = err;
    if (!err.message) err.message = 'Something Went Wrong';
    res.status(status).render('error', { err });
});

app.listen(process.env.PORT, () => {
    console.log(`Serving on port ${process.env.PORT}`);
});
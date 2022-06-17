const express = require('express');
const { engine } = require('express-handlebars');
const favicon = require('serve-favicon');
const app = express();
const path = require('path');
app.use(express.static('public'));
app.use(favicon(path.join(__dirname,'public','static','img','favicon.ico')));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/api/data', (req, res) => {
    const data = [100, 50, 300, 40, 350, 250];
    res.json(data);
});

app.listen(3000);
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 4000

app.use(expressLayouts)
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.listen(port, () => console.info(`App listening on port ${port}!`));

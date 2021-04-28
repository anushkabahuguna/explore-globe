const express = require('express'),
	app = express(),
	port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
	res.render('/index.html');
});
app.get('/globe', (req, res) => {
	res.render('index2');
});
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

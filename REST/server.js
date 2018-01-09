const express = require('express');

const app = express();


// We must now require our fruit mode file since we moved it to another file
// ALWAYS used the plural version for required files
const fruits = require('./models/fruits.js')
	// console.log(fruits)

// this is my home route
app.get('/', (req, res) =>{
	// res.send('hello world')
})

app.get('/fruits', (req, res) =>{
	res.send(fruits)
});

// 'show' route for specific fruit
app.get('/fruits/:id', (req, res) =>{


	// We're going to make this also send an OBJECT with our data
	// the second paramter MUST BE AN OBJECT
	// We're going to use that object to include data in our template
	// res.render() 'renders' a template/view where res.send() just sends text
	res.render('show.ejs', {
		fruit: fruits[req.params.id]
	});

	// // 1. get the id
	// const fruitId = req.params.id;


	// // 2. Get the fruit
	// const fruit = fruits[fruitId];

	// // console.log(fruit)

	// console.log(typeof fruit);

	// let responseString = 'fruit #' + fruitId + ' is ' + fruits.name + ' and is '; 

	// if(fruit.readyToEat) responseString = responseString + ' not ';

	// responseString += 'ready to eat!';

	// res.send(responseString)
})


// Put this in BEFORE writing routes
app.listen(3000, () => {
	console.log('listening on port 3000')
});
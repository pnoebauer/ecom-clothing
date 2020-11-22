const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

//during testing or development
if(process.env.NODE_ENV !== 'production') require('dotenv').config(); //load .env into process environment

const app = express(); //instantiate new express application
const port = process.env.PORT || 5000; //heroku sets up process port; during development use port 5000

app.use(bodyParser.json()); //for any requests coming in, process their body tag and convert to json
app.use(bodyParser.urlencoded({ extended: true })); //url requests that contain incorrect characters (i.e. spaces) are converted to correct ones

app.use(cors()); //allow requests from port 3000 (frontend) to port 5000 (backend)

//in production serve all static files (html,css,js)
if(process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));

	//any url user hits
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html')); //send the index.html from client/build folder as default
	});
}

app.listen(port, error => {
	if(error) throw error;
	console.log('Server running on port', port);
})
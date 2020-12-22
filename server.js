const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

//during testing or development
if(process.env.NODE_ENV !== 'production') require('dotenv').config(); //load .env into process environment (adds variables from there)

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express(); //instantiate new express application
const port = process.env.PORT || 5000; //heroku sets up process port; during development use port 5000

app.use(compression()); //use gzip compression in the Express app to decrease size of response body
app.use(bodyParser.json()); //for any requests coming in, process their body tag and convert to json
app.use(bodyParser.urlencoded({ extended: true })); //url requests that contain incorrect characters (i.e. spaces) are converted to correct ones
app.use(enforce.HTTPS({ trustProtoHeader: true })); //always use HTTPS even if request comes from HTTP

app.use(cors()); //allow requests from port 3000 (frontend) to port 5000 (backend)


//in production serve all static files (html,css,js)
if(process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));

	//when app requests service-worker.js file from '/service-worker.js' route, then send it
	app.get('/service-worker.js', (req,res) => {
		res.sendFile(path.resolve(__dirname, 'client/build', 'service-worker.js')); //service-worker comes with create-react-app and is within the build folder
	});

	//any url user hits
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html')); //send the index.html from client/build folder as default
	});
}

app.listen(port, error => {
	if(error) throw error;
	console.log('Server running on port', port);
});

// //when app requests service-worker.js file from '/service-worker.js' route, then send it
// app.get('/service-worker.js', (req,res) => {
// 	res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js')); //service-worker comes with create-react-app and is within the build folder
// });

// frontend will post to route /payment
app.post('/payment', (req, res) => {
	//req object contains token that is needed to make a Stripe payment; token from stripe-button.component
	// pass body to Stripe API (https://stripe.com/docs/api/charges)
	const body = {
		source: req.body.token.id,
		amount: req.body.amount,
		currency: 'usd'
	};
	// Create charge object and send the stripe response to the frontend (client)
	stripe.charges.create(body, (stripeErr, stripeRes) => {
		if(stripeErr) {
			res.status(500).send({ error: stripeErr });
		} 
		else {
			res.status(200).send( { success: stripeRes });
		}
	})
});
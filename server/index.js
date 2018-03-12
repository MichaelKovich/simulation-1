// Import Absolute Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

// Import Controller
const controller = require('./controller');

// Instantiate Express
const app = express();
// Used to parse information
app.use(bodyParser.json());
// Used to apply some level of security to the application
app.use(cors());

// Identify static files to be served by Express:
app.use(express.static('../public/build'));

// Invoking massive with the connection_string in the .env file
massive(process.env.CONNECTION_STRING)
  .then((dbInstance) => {
    app.set('db', dbInstance);
  })
  .catch(err => console.log(err));

// ROUTING HERE
app.get('/api/getProducts/:id', controller.getProducts);
app.get('/api/getProduct/:shelf/:bin', controller.getProduct); // delete this, delete controller, and delete sql
// app.post('/api/post', cb); // For the create page (req.body, incl. shelf and bin data from props)
// app.put('/api/update', cb); // For bin > update (req.body)
// app.delete('/api/delete/:id', cb); // For bin > delete (req.params.id)

// LISTENING HERE
app.listen(process.env.PORT || 3001, () => console.log('Listening!'));

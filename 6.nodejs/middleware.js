/**
 * Express Middleware Documentation and Examples
 * 
 * Middleware functions are functions that have access to the request object (req), 
 * the response object (res), and the next middleware function in the application’s 
 * request-response cycle.
 */

import express from 'express';
const app = express();
const port = 3000;

// ==========================================
// 1. Application-level Middleware
// ==========================================
// Attached to an instance of the app object by using app.use() and app.METHOD()
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next(); // Pass control to the next middleware function
});

// Middleware for a specific path
app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method);
  next();
});


// ==========================================
// 2. Router-level Middleware
// ==========================================
// Works in the same way as application-level middleware, except it is bound to an instance of express.Router()
const router = express.Router();

// A middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log('Router Time:', Date.now());
  next();
});

// A middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', (req, res, next) => {
  // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('route');
  // otherwise pass control to the next middleware function in this stack
  else next();
}, (req, res, next) => {
  res.send('regular');
});

// Handler for the /user/:id path, which renders a special page
router.get('/user/:id', (req, res, next) => {
    res.send('special');
});

// Mount the router on the app
app.use('/', router);


// ==========================================
// 3. Error-handling Middleware
// ==========================================
// Error-handling middleware always takes four arguments: (err, req, res, next)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


// ==========================================
// 4. Built-in Middleware
// ==========================================
// Express has the following built-in middleware functions:
// - express.static: serves static assets such as HTML files, images, and so on.
// - express.json: parses incoming requests with JSON payloads.
// - express.urlencoded: parses incoming requests with URL-encoded payloads.

app.use(express.static('public')); // Serve static files from 'public' directory
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies


// ==========================================
// 5. Third-party Middleware
// ==========================================
// Use third-party middleware to add functionality to Express apps.
// Example: cookie-parser (requires installation: npm install cookie-parser)
// import cookieParser from 'cookie-parser';
// app.use(cookieParser());

// Example: morgan (logging)
// import morgan from 'morgan';
// app.use(morgan('tiny'));


// ==========================================
// 6. Custom Middleware
// ==========================================
// A simple custom middleware function that adds a timestamp to the request object
const requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>';
  responseText += `<small>Requested at: ${req.requestTime}</small>`;
  res.send(responseText);
});

app.listen(port, () => {
  console.log(`Middleware example app listening on port ${port}`);
});

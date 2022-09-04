const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require('./utils/dbConnect');
const userRoutes = require('./routes/v1/user.route.js');
const errorHandler = require('./middleware/errorHandler');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// app.use(viewCount);

// Apply the rate limiting middleware to all requests
// app.use(limiter);

dbConnect();

app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.all('*', (req, res) => {
  res.send('NO route found.');
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

process.on('unhandledRejection', (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});

const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./config/db'),
      cgRoutes = require('./expressRoutes/cgRoutes');
      morgan = require('morgan'),
      passport = require('passport'),
      api = require('./expressRoutes/api'),
      upload = require('./upload');

mongoose.Promise = require('bluebird');
mongoose.connect(config.DB, { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(passport.initialize());


const port = process.env.PORT || 4000;


app.use('/country-gourmet', cgRoutes);
app.post('/upload', upload);
app.use('/api', api);


const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});


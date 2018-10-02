const mongoose = require('mongoose');

// Connect to mongodb
// mongoose.connect('mongodb://localhost/movieroo');

// mongoose.connection.once('open', function(){
//     console.log('Connection has been made, now make fireworks...');
// }).on('error', function(error){
//     console.log('Connection error:', error);
// });

mongoose
  .connect(
    'mongodb://localhost/lab-express-cinema',
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

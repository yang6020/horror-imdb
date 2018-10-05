const index = require('./routes/index');
const movies = require('./routes/movies');

const app = express();
require('./express')(app);
app.use('/', index);
app.use('/movies', movies);

module.exports = app;

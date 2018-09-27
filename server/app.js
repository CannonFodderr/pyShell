const   express = require('express'),
        env = require('dotenv').config(),
        path = require('path'),
        port = process.env.PORT,
        app = express();


// Setup Routes
const indexRoutes = require('./routes/index');

// APP Config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.use(express.static(path.join(__dirname + '../../client')));


app.use(indexRoutes);
app.listen(port, ()=> console.log(`Serving on port: ${port}`))

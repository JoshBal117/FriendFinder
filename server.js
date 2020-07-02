// Requirements
const express = require('express');
// const path = require('path');

//Express
let app = express();
let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('./app/public'));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

//Web server
app.listen(PORT, function() {
    console.log('Listening on port: ' + PORT);
});
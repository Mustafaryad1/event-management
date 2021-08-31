const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./auth/auth');

const app = express();

// initailize middlewares
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

// import routes
const user_routes = require('./routes/user_routes');
const event_routes = require('./routes/event_routes');
const attendance_routes = require('./routes/attendance_routes');


// load routes
app.use('/user', user_routes);
app.use('/event', event_routes);
app.use('/attendance', attendance_routes);



// run app
const port = 5000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
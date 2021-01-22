const bodyParser = require('body-parser');
const express = require('express');
const {connection} = require('./mariadb/connection');
const userRouter = require('./routes/user.route')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
    
app.use('/api/user', userRouter);

app.listen(5000, () => {
    console.log(`server is running on port 5000.`)
})
connection();
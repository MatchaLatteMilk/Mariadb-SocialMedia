const bodyParser = require('body-parser');
const express = require('express');
const {connection} = require('./mariadb/connection');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.send('welcome');
});

app.listen(5000, () => {
    console.log(`server is running on port 5000.`)
})
connection();
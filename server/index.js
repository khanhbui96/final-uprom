require('dotenv').config();
const express= require('express');
const mongoose = require('mongoose');
const formidableMiddleware = require('express-formidable');
const collectionsRoutes = require('./routes/collections.routes');
const paysRoutes = require('./routes/pays.routes');
const cors = require('cors')

mongoose.connect('mongodb://localhost/finance', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
const app = express();

const port = process.env.PORT;

app.use(formidableMiddleware());
app.use(cors());
app.use('/api/collections',collectionsRoutes );
app.use('/api/pays',paysRoutes )

app.listen(port, ()=>{
    console.log(`Server is listenning on ${port}`)
})
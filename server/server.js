const express = require('express');
const path = require('path');
const db = require('./../db/db.js');
//  ///////////////////////////////////
const app = express();


app.use(express.static(path.join(__dirname, './../client/dist/')));


const PORT = 3004;
app.listen(PORT);

app.get('/photos/:productId', db.getPhotos);

app.get('/products/:productId', db.getProduct);

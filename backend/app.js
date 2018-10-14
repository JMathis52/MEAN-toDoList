const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Item = require('./models/item');

const app = express();

mongoose.connect('mongodb+srv://jmathis:N8dHsprjSv8RXM5o@cluster0-btvbm.mongodb.net/toDoList?retryWrites=true')
  .then(() => {
    console.log('Successfully connected to the database!');
  })
  .catch(() => {
    console.log('Error connecting to the database!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.post('/api/items', (req, res, next) => {
  const item = new Item({
    content: req.body.content
  });
  item.save().then(createdItem => {
    res.status(201).json({
      message: 'Item added successfully!',
      itemId: createdItem._id,
    });
  });
});

app.get('/api/items', (req, res, next) => {
  Item.find().then(documents => {
    res.status(200).json({
      message: 'Items fetched successfully',
      items: documents
    });
  });
});

app.delete('/api/items/:id', (req, res, next) => {
  Item.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({
      message: 'Post deleted',
    });
  });
});

module.exports = app;

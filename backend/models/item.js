const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  content: { type: String, required: true },
});

module.exports = mongoose.model('Item', itemSchema);

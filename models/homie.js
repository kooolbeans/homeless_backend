const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  image_url: {
    type: String,
  },
}, {timestamps: true});

module.exports = mongoose.model('homie', dataSchema);

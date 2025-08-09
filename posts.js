// models/Post.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  imageText: {
    type: String,
    required: true,
  },
  image:{
    type:String
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt :{
    type:Date,
    default:Date.now,
  },
  likes: {
    type: Array,
    default: [],
  }
}); // Automatically adds createdAt and updatedAt

module.exports = mongoose.model('Post', postSchema);

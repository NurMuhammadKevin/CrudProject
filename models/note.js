
const mongoose = require('mongoose');

const Notes = new mongoose.Schema({
  name: {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : false
  },
  gender : {
    type : String,
    required : true
  }
});

const Note = mongoose.model('Note', Notes);

module.exports = Note;
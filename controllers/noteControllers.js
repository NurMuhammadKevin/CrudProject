// ======== CRUD =========
const Note = require('../models/note')

const fetchNotes = async (req,res) => {
  // Find the Notes
  const notes = await Note.find();
   // Respond them
  res.json({notes : notes});
};

const fetchNotesById =  async (req,res) => {
  // Get id off u URL
  const notesID = req.params.id;
  // Find Notes by ID
  const notes = await Note.findById(notesID);
  // Respond them
  res.json({ notes })
};

const createNote =  async (req,res) => {
  // Get id off u URL
// const {name, email, gender} = req.email.gender;
const note = new Note(req.body);
  // Find Notes by ID
const CreateNote = await note.save();
  // name,
  // email,
  // gender,
  // Respond them
  res.json({CreateNote})
}
const updateNote = async (req,res) => {
  // // Dapatkan id dari url
  // const noteId = req.params.id

  // // Dapatkan keluaran data dari req body
  // // const {name, email, gender} = req.email.gender // Kode ini sama seperti kode dibawah

  // const name = req.body.name
  // const email = req.email
  // const gender = req.gender
  // // Buat model dan update model tsb 
  // const note = await Note.findByIdAndUpdate(noteId, {
  //   name,
  //   email,
  //   gender
  // })
  const note = await Note.updateOne({_id:req.params.id}, {$set: req.body})
  // Respond them
  res.json({note});
};

const deleteNote =  async (req,res) => {
  // Dapatkan id dari url
  noteId = req.params.id
  // Hapus Data
  await Note.findByIdAndDelete(noteId);
  // Respond them
  res.json({ Success : "Delete Success"})
}

module.exports = { fetchNotes,fetchNotesById,createNote,updateNote,deleteNote}
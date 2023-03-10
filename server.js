// Load env variabels
if (process.env.NODE_ENV != "production") {
  require('dotenv').config();
};

// Import dependecies
const express = require('express');
const cors = require('cors');
const connectToDb = require('./config/connectToDb.js');
const cookieParser = require('cookie-parser');
// const Note = require('./models/note')
const noteControllers = require('./controllers/noteControllers.js')
const userControllers = require('./controllers/userControllers.js')
const requireAuth = require('./middleware/requireAuth.js')
// Create an express app
const app = express();

// Configure express app
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Connect To DB
connectToDb();

// Routing JWT
app.post('/signup',userControllers.SignUp);
app.post('/login',userControllers.Login);
app.get('/logout',userControllers.Logout);
app.get('/check-auth', requireAuth , userControllers.checkAuth)

// Routing Fetch Notes
app.get('/notes', noteControllers.fetchNotes);

app.get('/notes/:id', noteControllers.fetchNotesById)
// Creating Schema
app.post('/notes', noteControllers.createNote);

app.put('/notes/:id', noteControllers.updateNote);

app.delete('/notes/:id', noteControllers.deleteNote);

// Start our server
app.listen(process.env.PORT);
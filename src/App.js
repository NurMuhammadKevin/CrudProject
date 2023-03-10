import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList'
import EditNote from './components/EditNote';
import Register from './components/register/Register';
import Login from './components/Login';

const App = () => {
  return (
    <BrowserRouter>
    <div className='container'>
      <Routes>
        <Route path="/" element={<NoteList/>}/>
        <Route path="add" element={<AddNote/>}/>
        <Route path="edit/:id" element={<EditNote/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>      
    </div>
    </BrowserRouter>
  )
}

export default App;


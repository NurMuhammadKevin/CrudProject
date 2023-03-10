import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  },[])

  const fetchNotes = async () => {
    const res = await axios.get('http://localhost:5000/notes');
    setNotes(res.data.notes)
    // setNotes(res.data)
  }

  const deleteNotes = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/notes/${id}`)
      fetchNotes();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='columns'>
      <div className='column is-half mt-10'>
        <Link 
        to={'add'} 
        className="button is-success" >
          Add New
          </Link>
        <table className='table is-striped is-fullwidth mt-5 '>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((Notes, index) => (
              <tr key={Notes._id}>
                <td>{index + 1}</td>
                <td>{Notes.name}</td>
                <td>{Notes.email}</td>
                <td>{Notes.gender}</td>
                <td>
                  <Link to={`edit/${Notes._id}`} className="button is-info is-small mr-1">Edit</Link>
                  <button
                  onClick={() => deleteNotes(Notes._id)}
                  className="button is-danger is-small">Delete</button>
                </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default NoteList
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddNote = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [gender, setGender] = useState("Male");
   const navigate = useNavigate();

   const createNotes = async (e) => {
      e.preventDefault();
      try { 
         await axios.post('http://localhost:5000/notes', {
            name,
            email,
            gender
         });
         navigate("/") // Ketika Berhasil akan Kembali ke menu Utama
      } catch (error) {
         console.log(error);
      };
};
   return (
      <div className="columns">
         <div className="column is half">
            <form onSubmit={createNotes}>
               <div className="field">
                  <label className='control'>Name</label>
                     <div className='control'>
                        <input 
                        type="text" 
                        className='input' 
                        value={name} 
                        onChange={(e) => {setName(e.target.value)}} 
                        placeholder='Name' />
                     </div>
                  </div>
                  <div className="field">
                     <label className='control'>Email</label>
                     <div className='control'>
                        <input 
                        type="text" 
                        className='input' 
                        value={email} 
                        onChange={(e) => {setEmail(e.target.value)}}
                        placeholder='Email' />
                     </div>
                  </div>
                  <div className="field">
                     <label className='control'>Gender</label>
                     <div className='control'>
                        <div className='select is-fullwidth'>
                           <select 
                           value={gender} 
                           onChange={(e) => {setGender(e.target.value)}}>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                           </select>
                        </div>
                  </div>
                  <div className="field">
                     <div className='control'>
                        <button type='submit' className='button is-success'>Save</button>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </div>
      );
};

export default AddNote;
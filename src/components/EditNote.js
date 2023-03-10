import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditNote = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [gender, setGender] = useState("Male");
   const navigate = useNavigate();
   const { id } = useParams();

   useEffect(() => {
      fetchNotesById();
   },[]);

   const fetchNotesById = async () => {
      const res = await axios.get(`http://localhost:5000/notes/${id}`,)
      setName(res.data.name);
      setEmail(res.data.email);
      setGender(res.data.gender);
   };

   const updateNotes = async (e) => {
      e.preventDefault();
      try { 
         await axios.put(`http://localhost:5000/notes/${id}`, {
            name,
            email,
            gender,
         });
         navigate("/") // Ketika Berhasil akan Kembali ke menu Utama
      } catch (error) {
         console.log(error);
      };
};
   return (
      <div className="columns mt-5">
         <div className="column is half">
            <form onSubmit={updateNotes}>
               <div className="field">
                  <label className='control'>Name</label>
                     <div className='control'>
                        <input 
                        type="text" 
                        className='input' 
                        value={name ||""} 
                        onChange={(event) => {setName(event.target.value)}} 
                        placeholder='Name' />
                     </div>
                  </div>
                  <div className="field">
                     <label className='control'>Email</label>
                     <div className='control'>
                        <input 
                        type="text" 
                        className='input' 
                        value={email ||""} 
                        onChange={(event) => {setEmail(event.target.value)}}
                        placeholder='Email' />
                     </div>
                  </div>
                  <div className="field">
                     <label className='control'>Gender</label>
                     <div className='control'>
                        <div className='select is-fullwidth'>
                           <select 
                           value={gender ||""} 
                           onChange={(event) => {setGender(event.target.value)}}>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                           </select>
                        </div>
                  </div>
                  <div className="field">
                     <div className='control'>
                        <button type='submit' className='button is-success'>
                           Update
                           </button>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </div>
      );
};

export default EditNote;

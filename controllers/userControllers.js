const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function SignUp(req,res) {
   try {
      // Daptkan email dan pw dari req body
      const { email, password } = req.body;
      // Hash Password =>>> Untuk mengenkripsi password
      const hashPassword = bcrypt.hashSync(password, 8); 
      // Buat User dengan data
      await User.create({email,password : hashPassword});
      // respon
      res.sendStatus(200);
   }  catch (error) {
      console.log(error)
   }
};
async function Login(req,res) {
   try {
   // Dapatkan emain dan password req body
   const {email,password} = req.body;
   // Dapatkan User dari request email
   const user = await User.findOne({email});
   if (!user) return res.sendStatus(401);
   // Bandingkan pw yg dikirim dengan menemukan pw yg sudah dihash
   const passwordMatch = bcrypt.compareSync(password, user.password); // true
   if (!passwordMatch) return res.sendStatus(401);
   // Buat Jwt(JSON Web Token)
   const exp = Date.now() + 1000 * 10;
   const token = jwt.sign({ sub: user._id, exp}, process.env.SECRET);
   // Ubah ke Cookie
   res.cookie("Authorization", token, {
      expires: new Date(exp),
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV ==="production",
   });
   // respon
   res.sendStatus(200);
   }  
   catch (err) {
      console.log(err);
      res.sendStatus(400);
   }
} 
function Logout(req,res) {
   try {
   res.clearCookie("Authorization");
   res.sendStatus(200)
   }
   catch (err) {
      console.log(err);
      res.sendStatus(400);
   }
};
function checkAuth(req, res) {
   try {
      res.sendStatus(200);
   } 
   catch (err) {
      console.log(err)
      return res.sendStatus(400)
   }
};
module.exports = {
   SignUp,
   Login,
   Logout,
   checkAuth,
}
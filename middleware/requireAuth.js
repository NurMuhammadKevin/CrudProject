const jwt = require('jsonwebtoken');
const User = require('../models/user')

async function requireAuth(req, res, next) { // Ingat jangan kebalik antara request dan respond
   try {
   // read token off cookie
   const token = req.cookies.Authorization;
   // Decode the token
   const decode = jwt.verify(token, process.env.SECRET);
   // Cek expirited code
   if(Date.now() > decode.exp ) return res.sendStatus(401);
   // Find user using decode sub
   const user = await User.findById(decode.sub);
   if (!user) return res.sendStatus(401);
   // Attach user req
   req.user = user;
   // Continue on
   next();
   } catch (err) {
   return res.sendStatus(401)
   }

}

module.exports = requireAuth;
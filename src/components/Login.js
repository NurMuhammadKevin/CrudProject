import React from "react";
import './Login.css'


const Login = () => {

   return(
      <section>
         <div className="form-box">
            <div className="form-value">
               <form action="">
                  <h2>Login</h2>
                  <div className="inputbox">
                     <ion-icon name="mail-outline"></ion-icon>
                     {/* <input type={} required/> */}
                     <label htmlFor="email">Email</label>
                  </div>
                  <div className="inputbox">
                     <ion-icon name="mail-outline"></ion-icon>
                     {/* <input type={} required/> */}
                     <label htmlFor="password">Password</label>
                  </div>
                  <div className="forget">
                     <label htmlFor="check"></label>
                     {/* <input type="checkbox">Remember Me</input> */}
                  </div>
                  <button> Log In</button>
                  <div className="register">
                     <p> Don't have a account <a href="/register">Register</a></p>
                  </div>
               </form>
            </div>
         </div>
      </section>
   )
}


export default Login;
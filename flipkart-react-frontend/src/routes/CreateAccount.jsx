// import { Link } from "react-router-dom";
// import "../CreA.css";
// import Header from "../components/Header";
// const CreateAccount = () => {
//   return (
//     <>
//       <Header />
//       <div className="form-container">
//         <div className="form-content">
//           <div className="form-left">
//             <h2>Looks like you're new here!</h2>
//             <p>Sign up with your mobile number to get started</p>
//           </div>
//           <div className="form-right">
//             <form>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   id="fullname"
//                   name="fullname"
//                   placeholder="Enter Full Name"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Enter Email"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   id="mobile"
//                   name="mobile"
//                   placeholder="Enter Mobile Number"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   placeholder="Enter Password"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   id="confirm-password"
//                   name="confirm-password"
//                   placeholder="Confirm Password"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <button
//                   onClick={() => {
//                     alert("Try entering a Strong Password");
//                   }}
//                 >
//                   Sign Up
//                 </button>
//               </div>
//               <div className="form-footer">
//                 Already have an account ? <Link to="/login-page"> Login </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default CreateAccount;

import { Link } from "react-router-dom";
import "../CreA.css";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios"; // Import axios to make HTTP requests

const CreateAccount = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send POST request to the backend
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        fullname,
        email,
        mobile,
        password,
        confirmPassword,
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <div className="form-content">
          <div className="form-left">
            <h2>Looks like you're new here!</h2>
            <p>Sign up with your mobile number to get started</p>
          </div>
          <div className="form-right">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Enter Full Name"
                  required
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Confirm Password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button type="submit">Sign Up</button>
              </div>
              <div className="form-footer">
                Already have an account? <Link to="/login-page">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;


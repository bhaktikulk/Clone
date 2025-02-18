

// import { Link } from "react-router-dom";
// import Header from "../components/Header";

// const LoginPage = () => {
//   return (
//     <>
//       <Header />
//       {/* Updated login form displayed as a centered card */}
//       <div
//         className="loginPage"
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           minHeight: "80vh",
//           backgroundColor: "#f8f9fa",
//         }}
//       >
//         <div
//           className="login-card"
//           style={{
//             background: "violet", // Card color set to violet
//             padding: "2rem",
//             borderRadius: "8px",
//             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//             width: "320px",
//             textAlign: "center",
//           }}
//         >
//           <h4 style={{ marginBottom: "10px", color: "#000" }}>Login to Your Profile</h4>
//           <p
//             style={{
//               fontSize: "14px",
//               color: "#666",
//               marginBottom: "20px",
//             }}
//           >
//             Access your Orders, Wishlist, and Recommendations
//           </p>
//           <input
//             type="text"
//             id="loginInput"
//             placeholder="Enter Email/Mobile Number"
//             style={{
//               width: "100%",
//               padding: "10px",
//               marginBottom: "15px",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//             }}
//           />
//           <button
//             className="otp"
//             style={{
//               width: "100%",
//               padding: "10px",
//               backgroundColor: "#5c67f2",
//               color: "#fff",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//             }}
//             onClick={() => {
//               alert(
//                 "Attention user !! Due to Technical Errors OTP Generation might get delayed"
//               );
//             }}
//           >
//             Request OTP
//           </button>
//           <p
//             style={{
//               fontSize: "12px",
//               color: "#999",
//               marginTop: "15px",
//             }}
//           >
//             By continuing, you agree to our{" "}
//             <a
//               href="#"
//               style={{ color: "#5c67f2", textDecoration: "none" }}
//             >
//               Terms of Use
//             </a>{" "}
//             and{" "}
//             <a
//               href="#"
//               style={{ color: "#5c67f2", textDecoration: "none" }}
//             >
//               Privacy Policy
//             </a>
//             .
//           </p>
//           <p style={{ fontSize: "12px", marginTop: "10px" }}>
//             New to Shopify?{" "}
//             <Link
//               to="/create-account"
//               style={{ color: "#5c67f2", textDecoration: "none" }}
//             >
//               Create an Account
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginPage;

import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const handleLogin = async () => {
    const userCredentials = { email, password };

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userCredentials),
      });

      const data = await response.json();

      if (response.ok) {
        setLoginMessage("Login successful!");
      } else {
        setLoginMessage(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setLoginMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div
        className="loginPage"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div
          className="login-card"
          style={{
            background: "violet", // Card color set to violet
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            width: "320px",
            textAlign: "center",
          }}
        >
          <h4 style={{ marginBottom: "10px", color: "#000" }}>Login to Your Profile</h4>
          <p
            style={{
              fontSize: "14px",
              color: "#666",
              marginBottom: "20px",
            }}
          >
            Access your Orders, Wishlist, and Recommendations
          </p>
          <input
            type="text"
            id="emailInput"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <input
            type="password"
            id="passwordInput"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#5c67f2",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
          {loginMessage && (
            <p style={{ fontSize: "14px", color: "#f44336", marginTop: "10px" }}>
              {loginMessage}
            </p>
          )}
          <p style={{ fontSize: "12px", marginTop: "10px" }}>
            New to Shopify?{" "}
            <Link to="/create-account" style={{ color: "#5c67f2", textDecoration: "none" }}>
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;


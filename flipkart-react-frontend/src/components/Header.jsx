// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { GoHeart } from "react-icons/go";
// import { LuPackageSearch } from "react-icons/lu";
// import { FaRegUserCircle } from "react-icons/fa";
// import { GrNotification } from "react-icons/gr";
// import { IoMdMore } from "react-icons/io";
// import { AiOutlineDownload } from "react-icons/ai";
// import React, { useState } from "react";
// const Header = ({ onSearch }) => {
//   const cart = useSelector((store) => store.cart);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (event) => {
//     if (event.key === "Enter") {
//       onSearch(searchQuery);
//     }
//   };
//   return (
//     <div className="header">
//       <div className="logo_container">
//         <Link to="/">
//           <img
//             className="flipkart_home"
//             src={"./images/shopify2.png"}
//             alt="Flipkart_Logo"
//           />
//         </Link>
//       </div>
//       <div className="search_bar">
//         <span className="material-symbols-outlined search_icon">search</span>
//         <input
//           className="search_input"
//           placeholder="Search for Products, brands and More"
//           value={searchQuery}
//           onChange={(event) => setSearchQuery(event.target.value)}
//           onKeyDown={handleSearch}
//         />
//       </div>
//       <div className="action_bar">
//         <div className="action_container login dropdown ">
//           <span className="material-symbols-outlined">account_circle</span>
//           <span className="profile_name">Login</span>
//           <span className="material-symbols-outlined  arrowDrop">
//             arrow_drop_down
//           </span>

//           <div className="dropdown-content">
//             <Link to="/login-page">
//               <FaRegUserCircle size={15} /> My Profile
//             </Link>

//             <Link to={cart.length > 0 ? "/cart" : "/emptycart"}>
//               <LuPackageSearch size={15} /> Orders
//             </Link>
//             <Link to="/wishlist">
//               <GoHeart size={15} /> Wishlist
//             </Link>
//           </div>
//         </div>
//         <div className="action_container">
//           <Link
//             to={cart.length > 0 ? "/cart" : "/emptycart"}
//             className="shopping_icon"
//           >
//             <span className="profile_name shopping_icon">Cart</span>
//             <span className="material-symbols-outlined action_icon shopping_icon">
//               shopping_cart
//             </span>
//           </Link>
//           <span className={cart.length > 0 ? "cart-item-count" : "cart"}>
//             {cart.length > 0 ? cart.length : null}
//           </span>
//         </div>
//         <div className="action_container">
//           <Link
//             to="#"
//             className="action_icon"
//             onClick={() => {
//               alert("Connection not found..");
//             }}
//           >
//             {/* <span className="material-symbols-outlined action_icon">
//               storefront
//             </span>
//             <span>Become a Seller</span> */}
//           </Link>
//         </div>
//         <div className="action_container">
//           <div className="action_icon drop">
//             <IoMdMore size={26} />
//             <div className="drop-content">
//               <Link to="/notifications">
//                 <GrNotification size={15} /> Notifications Preference
//               </Link>
//               <Link
//                 to="#"
//                 onClick={() => {
//                   alert("Downloading Error...");
//                 }}
//               >
//                 <AiOutlineDownload size={15} /> Download App
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Header;

// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { GoHeart } from "react-icons/go";
// import { LuPackageSearch } from "react-icons/lu";
// import { FaRegUserCircle } from "react-icons/fa";
// import { GrNotification } from "react-icons/gr";
// import { IoMdMore } from "react-icons/io";
// import { AiOutlineDownload } from "react-icons/ai";
// import React, { useState } from "react";
// //import CategoryNav from "./CategoryNav"; // ✅ Added CategoryNav below the header
// import CategoryNav from "../components/CategoryNav";

// const Header = ({ onSearch }) => {
//   const cart = useSelector((store) => store.cart);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (event) => {
//     if (event.key === "Enter") {
//       onSearch(searchQuery);
//     }
//   };

//   return (
//     <div>
//       {/* ✅ Header Section */}
//       <div className="header">
//         <div className="logo_container">
//           <Link to="/">
//             <img
//               className="flipkart_home"
//               src={"./images/shopify2.png"}
//               alt="Flipkart_Logo"
//             />
//           </Link>
//         </div>
//         <div className="search_bar">
//           <span className="material-symbols-outlined search_icon">search</span>
//           <input
//             className="search_input"
//             placeholder="Search for Products, brands and More"
//             value={searchQuery}
//             onChange={(event) => setSearchQuery(event.target.value)}
//             onKeyDown={handleSearch}
//           />
//         </div>
//         <div className="action_bar">
//           <div className="action_container login dropdown">
//             <span className="material-symbols-outlined">account_circle</span>
//             <span className="profile_name">Login</span>
//             <span className="material-symbols-outlined arrowDrop">
//               arrow_drop_down
//             </span>

//             <div className="dropdown-content">
//               <Link to="/login-page">
//                 <FaRegUserCircle size={15} /> My Profile
//               </Link>
//               <Link to={cart.length > 0 ? "/cart" : "/emptycart"}>
//                 <LuPackageSearch size={15} /> Orders
//               </Link>
//               <Link to="/wishlist">
//                 <GoHeart size={15} /> Wishlist
//               </Link>
//             </div>
//           </div>
//           <div className="action_container">
//             <Link
//               to={cart.length > 0 ? "/cart" : "/emptycart"}
//               className="shopping_icon"
//             >
//               <span className="profile_name shopping_icon">Cart</span>
//               <span className="material-symbols-outlined action_icon shopping_icon">
//                 shopping_cart
//               </span>
//             </Link>
//             <span className={cart.length > 0 ? "cart-item-count" : "cart"}>
//               {cart.length > 0 ? cart.length : null}
//             </span>
//           </div>
//           <div className="action_container">
//             <Link
//               to="#"
//               className="action_icon"
//               onClick={() => {
//                 alert("Connection not found..");
//               }}
//             >
//               {/* <span className="material-symbols-outlined action_icon">
//                 storefront
//               </span>
//               <span>Become a Seller</span> */}
//             </Link>
//           </div>
//           <div className="action_container">
//             <div className="action_icon drop">
//               <IoMdMore size={26} />
//               <div className="drop-content">
//                 <Link to="/notifications">
//                   <GrNotification size={15} /> Notifications Preference
//                 </Link>
//                 <Link
//                   to="#"
//                   onClick={() => {
//                     alert("Downloading Error...");
//                   }}
//                 >
//                   <AiOutlineDownload size={15} /> Download App
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Category Navigation Bar Added Below Header */}
//       <CategoryNav />
//     </div>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { GoHeart } from "react-icons/go";
import { LuPackageSearch } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { IoMdMore } from "react-icons/io";
import { AiOutlineDownload } from "react-icons/ai";
import React, { useState } from "react";
import CategoryNav from "../components/CategoryNav";// ✅ Kept only one instance below header

const Header = ({ onSearch }) => {
  const cart = useSelector((store) => store.cart);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      onSearch(searchQuery);
    }
  };

  return (
    <div>
      {/* ✅ Header Section */}
      <div className="header">
        <div className="logo_container">
          <Link to="/">
            <img
              className="flipkart_home"
              src={"./images/shopify2.png"}
              alt="Flipkart_Logo"
            />
          </Link>
        </div>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for Products, brands and More"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
        <div className="action_bar">
          <div className="action_container login dropdown">
            <span className="material-symbols-outlined">account_circle</span>
            <span className="profile_name">Login</span>
            <span className="material-symbols-outlined arrowDrop">
              arrow_drop_down
            </span>

            <div className="dropdown-content">
              <Link to="/login-page">
                <FaRegUserCircle size={15} /> My Profile
              </Link>
              <Link to={cart.length > 0 ? "/cart" : "/emptycart"}>
                <LuPackageSearch size={15} /> Orders
              </Link>
              <Link to="/wishlist">
                <GoHeart size={15} /> Wishlist
              </Link>
            </div>
          </div>
          <div className="action_container">
            <Link
              to={cart.length > 0 ? "/cart" : "/emptycart"}
              className="shopping_icon"
            >
              <span className="profile_name shopping_icon">Cart</span>
              <span className="material-symbols-outlined action_icon shopping_icon">
                shopping_cart
              </span>
            </Link>
            <span className={cart.length > 0 ? "cart-item-count" : "cart"}>
              {cart.length > 0 ? cart.length : null}
            </span>
          </div>
          <div className="action_container">
            <Link
              to="#"
              className="action_icon"
              onClick={() => {
                alert("Connection not found..");
              }}
            ></Link>
          </div>
          <div className="action_container">
            <div className="action_icon drop">
              <IoMdMore size={26} />
              <div className="drop-content">
                <Link to="/notifications">
                  <GrNotification size={15} /> Notifications Preference
                </Link>
                <Link
                  to="#"
                  onClick={() => {
                    alert("Downloading Error...");
                  }}
                >
                  <AiOutlineDownload size={15} /> Download App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Kept only one CategoryNav below the header */}
      <CategoryNav />
    </div>
  );
};

export default Header;

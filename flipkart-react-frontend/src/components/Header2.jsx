import React from "react";

const Header2 = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "120px", // Adjust height as needed
        backgroundImage: "url('/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* If you want to place content inside the banner, add here */}
    </div>
  );
};

export default Header2;

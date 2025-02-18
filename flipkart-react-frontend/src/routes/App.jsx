// import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../index.css";
// import FetchItems from "../components/fetchItems";
// import { useSelector } from "react-redux";
// import LoadingSpinner from "../components/LoadingSpinner";


// function App() {
//   const fetchStatus = useSelector((store) => store.fetchStatus);
//   return (
//     <>
//       <FetchItems />
//       {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
//       <Footer />
//     </>
//   );
// }

// export default App;

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;

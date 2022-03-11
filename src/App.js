import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider";
import Home from "./Home";
import About from "./Pages/About/About";
import Booking from "./Pages/Home/Home/Bookings/Booking";
//import Header from "./Pages/Home/Home/Header";
// import Aboutus from "./Pages/Home/Home/Aboutus";
//import Header from "./Pages/Home/Home/Header";
// import Packages from "./Pages/Packages/Packages";

import Services from "./Pages/Services/Services";
// import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
      {/* <Header/> */}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/booking" element={<Booking/>} />
      {/* <Route path="/packages" element={<Packages />}/>  */}
     
       {/* <Route path="/aboutus" element={<Aboutus />}/> */}
    </Routes>
  </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;

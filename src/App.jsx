import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./Screens/Landing";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { auth } from "./services/firebase";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./Screens/Home";
import Contact from "./Screens/Contact";
import ContactUsPage from "./Screens/Contact";
import About from "./Screens/About";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      }
      else {
        setUser(null);
      }
    });
  }, []);

  const userId = user?.uid;
  return (


    <div className="fixed md:relative md:h-screen h-[100vh]  w-full   ">
      <Navbar />
      <ToastContainer position="top-left" />
      <Routes>
        <Route path="/" element={user && userId ? <Home /> : <Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer />
      </div>


  )
}

export default App
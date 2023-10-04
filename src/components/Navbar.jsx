import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import { Button, Menu, MenuItem } from "@mui/material";
import { signOut } from "firebase/auth";
import defaultUser from "../assets/default.png";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { toast } from 'react-toastify';
const Navbar = ({ user }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlesignOut = async () => {
    await signOut(auth).then(() => {
      localStorage.clear();
      toast.success("User Logged out!")
      navigate("/");
    }).catch((error) => {
      toast.error(error);
      console.log(error);
    })
  }
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let navigate = useNavigate();
  const navItems1 = [
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  const navItems2 = [
    { label: "SKill Space", link: "/skill" },
    { label: "Acad Space", link: "/acad" }

  ]
  const userInfo = auth.currentUser;




  return (

    <nav className={`sticky-navbar  mb-10 h-[10%] w-full flex items-center justify-between flex-row pt-8 p-4`}>
      <a className="text-3xl tracking-tight flex items-center flex-shrink-0 text-white ">
        <h1 onClick={() => navigate("/")} className=" cursor-pointer tracking-tight flex items-center flex-shrink- mr-6mb-4 text-xl  font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl ">
          <span className="text-white ">
            Academia{" "}
          </span>{" "}
          &nbsp;
          <div className="bg-[#ff9b09] rounded-md p-1 text-black ">
            HUB
          </div>

        </h1>
      </a>
      {userInfo ? (
        <div className="  flex flex-row justify-end align-middle w-full  md:gap-20 p-2">
          {navItems2.map((item, idx) => (
            <p className="text-white hidden md:block text-normal md:text-2xl font-semibold ease-in-out transform transition duration-500 hover:scale-110 hover:underline hover:underline-offset-8 " key={idx}>
              <Link to={item.link}>{item.label}</Link>
            </p>
          ))}
          <div className="-mt-2 cursor-pointer rounded-full h-10 w-10 text-white transform transition duration-500 hover:scale-110">
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <img className="rounded-full" src={user?.photoURL} />

            </Button>

          </div>
        </div>

      ) : (
        <div className="flex flex-row justify-end align-middle w-full gap-10 md:gap-20">
          {navItems1.map((item, idx) => (
            <p className="text-white text-normal md:text-2xl font-semibold  " key={idx}>
              <Link to={item.link}>{item.label}</Link>
            </p>
          ))}

        </div>
      )
      }
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >


        <div className="block md:hidden">
          <MenuItem onClick={handleClose}><p onClick={() => navigate("/skill")}>Skill Space</p></MenuItem>
          <MenuItem onClick={handleClose}><p onClick={() => navigate("/acad")}>Acad Space</p></MenuItem>
        </div>



        <MenuItem onClick={handleClose}><button onClick={handlesignOut}>signout</button></MenuItem>

      </Menu>
    </nav>
  );
};

export default Navbar;

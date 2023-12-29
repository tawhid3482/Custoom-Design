
import { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
// import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
const Navber = () => {

  const [openMenu, setMenu] = useState(false);
const [openDropdown, setOpenDropdown] = useState(false);  //Add this state

//   const { user, isAdmin, logOut } = useState();

  const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "project", name: "Projects" },
    { path: "contact", name: "Contact" },
    { path: "contact", name: "Contactsss" },
  ];

const toggleDropdown = () => {
  setOpenDropdown(!openDropdown);
};

const closeDropdown = () => {
  setOpenDropdown(false);
};


  return (
    <nav className="flex justify-between items-center md:justify-center md:items-center  p-1 bg-gray-200 ">
      <div className="">

      <div  onClick={toggleDropdown} className="dropdown  ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className={`mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 ${
              openDropdown ? "block" : "hidden"
            }`}>
        <li onClick={closeDropdown}>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li onClick={closeDropdown}><a>Settings</a></li>
        <li onClick={closeDropdown}><a>Logout</a></li>
      </ul>
    </div>

      </div>

      <div
        className="md:hidden mr-32 "
        onClick={() => setMenu(!openMenu)}
      >
        {openMenu === true ? (
          <RxCross1 className="text-3xl"></RxCross1>
        ) : (
          <MdOutlineMenuOpen className="text-3xl"></MdOutlineMenuOpen>
        )}
      </div>

      <ul
        className={` md:flex  md:justify-center gap-8 rounded-md w-40  md:w-full duration-1000 absolute left-0 md:static  p-4 bg-gray-300
      ${openMenu ? "top-16" : "-top-60"}
      `}
      >
        {routes.map((route) => (
          <Navlinks key={route.path} route={route}></Navlinks>
        ))}
      </ul>
      <div className="">
       <p>LOGO</p>
      </div>
    </nav>
  );
};

export default Navber;

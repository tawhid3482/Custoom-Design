import { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
const Navber = () => {

  const [openMenu, setMenu] = useState(false);
  const { user, isAdmin, logOut } = useState();

  const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "project", name: "Projects" },
    { path: "contact", name: "Contact" },
    { path: "contact", name: "Contactsss" },
  ];
  

  return (
    <nav className="flex justify-between items-center md:justify-center md:items-center  p-1 bg-gray-200 ">
      <div className="">
        <div className="hidden dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <img src="" alt="" />
              )}
            </div>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
            <li className="">
              <button className="btn btn-sm uppercase">
                {user?.displayName}
              </button>
            </li>

            <li className="">
              {user && isAdmin && (
                <Link
                  to={"/dashboard/adminHome"}
                  className="btn btn-sm uppercase"
                >
                  Dashboard
                </Link>
              )}
              {user && !isAdmin && (
                <Link to={"/dashboard/home"} className="btn btn-sm uppercase">
                  Dashboard
                </Link>
              )}
            </li>

            <li className="">
              <button onClick={logOut} className="btn btn-sm uppercase">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="md:hidden mr-64 "
        onClick={() => setMenu(!openMenu)}
      >
        {openMenu === true ? (
          <RxCross1 className="text-3xl"></RxCross1>
        ) : (
          <MdOutlineMenuOpen className="text-3xl"></MdOutlineMenuOpen>
        )}
      </div>

      <ul
        className={` md:flex  md:justify-center gap-8 rounded-md w-40  md:w-full duration-1000 absolute left-0 md:static  p-4
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

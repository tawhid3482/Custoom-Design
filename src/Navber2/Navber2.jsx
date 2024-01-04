import RouteLink from "./RouteLink";
import { RiMenuSearchLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navber2 = () => {
    const [open, setOpen]=useState(false)
    const [openDropdown, setOpenDropdown] = useState(false); 

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/service", name: "Service" },
    { id: 3, path: "/service", name: "2" },
  ];
  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const closeDropdown = () => {
    setOpenDropdown(false);
  };
  return (
    <nav className="flex items-center justify-between bg-gray-300  p-4  my-5 rounded-lg">
      <div className="text-center md:static">logo</div>
      <div className="">
        <ul className={`md:flex md:static bg-gray-300 absolute px-5
        ${open ? 'top-16':'hidden'}
        `}>
          {routes?.map((route) => (
            <RouteLink key={route.id} route={route}>
              {" "}
            </RouteLink>
          ))}
        </ul>
      </div>
      <div onClick={()=>setOpen(!open)} className="text-3xl md:hidden">
        {open === true ? (
          <IoMdClose></IoMdClose>
        ) : (
          <RiMenuSearchLine className="text-3xl"></RiMenuSearchLine>
        )}
      </div>
      <div onClick={toggleDropdown} className="">
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li onClick={closeDropdown}>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li >
        <li onClick={closeDropdown}><a>Settings</a></li>
        <li onClick={closeDropdown}><a>Logout</a></li>
      </ul>
    </div>
      </div>
    </nav>
  );
};

export default Navber2;

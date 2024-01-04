import RouteLink from "./RouteLink";
import { RiMenuSearchLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navber2 = () => {
    const [open, setOpen]=useState(false)
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/service", name: "Service" },
    { id: 3, path: "/service", name: "2" },
  ];
  return (
    <nav className="flex items-center justify-between bg-gray-300  p-4  my-5 rounded-lg">
      <div className="">logo</div>
      <div className="">
        <ul className="flex items-center justify-center">
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
    </nav>
  );
};

export default Navber2;

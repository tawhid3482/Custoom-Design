
import { NavLink } from "react-router-dom";

const Navlinks = ({ route }) => {
  return (
    <li className=" p-1 rounded-lg  hover:bg-black hover:text-white ">
      <NavLink
        to={route?.path}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " p-2  rounded-lg text-center"
            : ""
        }
      >
        {route?.name}
      </NavLink>
    </li>
  );
};

export default Navlinks;


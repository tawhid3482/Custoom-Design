import { NavLink } from "react-router-dom";

const RouteLink = ({route}) => {
    return (
        <div>
            <li className="text-lg mr-16 hover:bg-red-300 p-2 rounded-lg">
                <NavLink to={route.path}
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "p-2 bg-red-400 rounded-lg text-center" : ""
              }
                >

                {route.name}
                </NavLink>
                </li>
        </div>
    );
};

export default RouteLink;
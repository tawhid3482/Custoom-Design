import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Navber2 from "../Navber2/Navber2";
import AllCard from "../Card/AllCard";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:'navber',
                element:<Navber2></Navber2>
            },
            {
                path:'card',
                element:<AllCard></AllCard>
            }
        ]
    }
])

export default Routes;
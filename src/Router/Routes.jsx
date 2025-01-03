import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import Offline from "../components/Offline";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
   
])

const Routes = () => {
    return (
        <RouterProvider router={router} />
    )
} 

export default Routes;
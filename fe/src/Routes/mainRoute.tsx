import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/static/Layout";
import Error from "../Error/Error";
import Create from "../pages/Auth/Create";
import Register from "../pages/Auth/Register";
import Images from "../pages/Auth/Images";
import AdminUser from "../pages/Auth/AdminUser";
import HomeScreen from "../pages/Screen/HomeScreen";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../Components/static/MainLayout";
import Home from "../pages/Screen/Home";



export const mainRoute = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeScreen/>
            }
        ]
    },
    {
      path: "/AdminUser",
        element: <AdminUser/>
    },
    {
      path: "/register",
        element: <Register/>
    },
    {
        path: "/create",
        element: <Create/>
    },
    {
       path: "/",
       element: 
       <PrivateRoute>
        <MainLayout/>
       </PrivateRoute>,
       children: [
        {
            index: true,
            element: <Home/>
        }
       ]


    }






    // {
    //     path: "/AdminUser",
    //     element: <AdminUser/>
    // },
    
    // {
    //     path: "/images",
    //     element: <Images/>
    // },
    // {
    //     path: "*",
    //     element: <Error/>
    // },

])
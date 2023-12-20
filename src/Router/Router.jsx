import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        }
      ]
    },
  ]);

  export default Router;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import NewTask from "../Pages/Dashboard/NewTask";
import PreviousTask from "../Pages/Dashboard/PreviousTask";
import DetailsPage from "../Components/DetailsPage";
import { getTask } from "../api/tasks";

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
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
      path:'/dashboard',
      element:<DashboardLayout/>,
      children:[
        {
          path:'/dashboard/newTask',
          element:<NewTask/>
        },
        {
          path:'/dashboard/previousTask',
          element:<PreviousTask/>
        },
        {
          path:'/dashboard/task/:id',
          element:<DetailsPage/>,
          loader:({params}) => getTask(params.id)
        }
      ]

    }
  ]);

  export default Router;
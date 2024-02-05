import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";

function App() {
const router=createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      }
    ]
  }
])
  

return <RouterProvider router={router}></RouterProvider>
}

export default App;

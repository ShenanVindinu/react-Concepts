import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Dashboard from "./pages/Dashboard.tsx";
import UpdateCustomer from "./pages/UpdateCustomer.tsx";
import DeleteCustomer from "./pages/DeleteCustomer.tsx";
import AddCustomer from "./pages/AddCustomer.tsx";



function App() {

    const routes = createBrowserRouter([
        {path:'', element: <Dashboard/>},
        {path:'/add', element: <AddCustomer/>},
        {path:'/update', element: <UpdateCustomer/>},
        {path:'/delete', element: <DeleteCustomer/>}
    ])

    return (
        <>
            <RouterProvider router={routes}/>
        </>
    );
}

export default App;

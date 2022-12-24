import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import UpdateUser from "./Components/UpdateUser/UpdateUser";
import UpdateUserModal from "./Components/UpdateUserModal/UpdateUserModal";

function App() {
  const [user, setUser] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home setUser={setUser}></Home>,
    },
    {
      path: "/updateUser",
      element: <UpdateUser></UpdateUser>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

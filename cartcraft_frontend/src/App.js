import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import SignIn from "./pages/SignIn";
import ForgetPassword from "./components/ForgetPassword";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

import React, {useEffect, useState} from "react";
import {Home} from "./components/Home";
import {LoginIn} from "./components/LoginIn";
import {Register} from "./components/Register";
import {LogOut} from "./components/Logout"
import {GiveStaffBack} from "./components/GiveStaffBack";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LoginIn />} />
      <Route path="register" element={<Register />} />
      <Route path="wylogowano" element={<LogOut />} />
      <Route path="oddaj-rzeczy" element={<GiveStaffBack />} />
    </Routes>
  );
}

export default App;
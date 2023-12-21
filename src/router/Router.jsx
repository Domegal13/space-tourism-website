import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home";
import Destination from "../components/Destination";
import Crew from "../components/Crew";
import Technology from "../components/Technology";

import React from "react";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
};

export default Router;

import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import {Route} from "react-router-dom";
import Home from "../routes/Home";


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>

  );
};

export default AppRouter;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from './pages/Home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />

          {/* for 404 page not found */}
          <Route path="*" element={"PageNotFound"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

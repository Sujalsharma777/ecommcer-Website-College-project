import React, { useState } from "react";
import Hearder from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import Productads from "./component/ProductAds.jsx";
import Filter from "./component/FilterBar.jsx";
import Productlist from "./component/PoductList.jsx"
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const [search, setSearch] = useState("")
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hearder setSearch={setSearch} />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Productads />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Filter />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Productlist search={search} />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

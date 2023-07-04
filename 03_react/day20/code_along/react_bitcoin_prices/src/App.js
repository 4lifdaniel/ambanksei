import { useState } from "react";
import Home from "./pages/Home";
import "./App.css";

import { Routes, Route, Link, Navigate } from "react-router-dom";
import Currencies from "./pages/Currencies";
import PriceInfo from "./pages/PriceInfo";

function App() {
  const [price, setPrice] = useState();

  // The four main ones:
  // Routes
  // Route
  // Link
  // Navigate

  return (
    <div>
      <nav>
        <Link to="/">
          <img
            src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
            alt=""
          />
          <h1>Bitcoin prices</h1>
        </Link>
        <Link to="/currencies">Currency List</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/currencies" element={<Currencies />} />
          <Route
            path="/price/:currency"
            element={<PriceInfo price={price} setPrice={setPrice} />}
          />
          <Route path="/currency" element={<Navigate to="/currencies" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

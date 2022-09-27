import "./styles.css";
import Uberlist from "./Uberlist";
import { uberdata } from "./Data";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Help from "./Help";
import Desc from "./Desc";
export default function App() {
  const [uberlist, Setuberlist] = useState(uberdata);
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/uberlist" element={<Uberlist uberlist={uberlist} />} />
        <Route path="/" element={<Home />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/desc/:idUber" element={<Desc />} />
      </Routes>
    </div>
  );
}

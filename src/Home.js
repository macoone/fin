import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import "./styles.css";
import rider from "./img/rider.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="nav">
        <NavbarBrand href="/" className="ube">
          Uber
        </NavbarBrand>
        <Link to={`/uberlist`}>
          <NavbarBrand href="/" className="ube1">
            Products
          </NavbarBrand>
        </Link>
        <Link to={`/Help`}>
          <NavbarBrand href="/" className="ube2">
            Security
          </NavbarBrand>
        </Link>
        <Link to={`/Help`}>
          <NavbarBrand href="/" className="ube3">
            help
          </NavbarBrand>
        </Link>
      </Navbar>
      <div className="con">
        <h1 className="tit">Always the ride you want</h1>
        <p className="para">Request a ride, hop in, and relax.</p>
        <Link to={`/uberlist`}>
          <button className="bt">Our drivers</button>
        </Link>
      </div>
      <img src={rider} alt="Logo" className="img" />
    </div>
  );
};
export default Home;

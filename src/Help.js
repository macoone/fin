import car from "./img/car.png";
import dri from "./img/wheel.png";
import eat from "./img/restaurant.png";
import mer from "./img/cocktail.png";
import bike from "./img/bicycle.png";
import truck from "./img/truck.png";
import bus from "./img/briefcase.png";
import { Link } from "react-router-dom";
const Help = () => {
  return (
    <div className="help">
      <br />
      <h1 className="tit">Welcome to Uber Support</h1>
      <br />
      <p className="para"> How can we help?</p>
      <div className="o1">
        <img src={car} className="om1" alt="Logo" />
        <p>Riders</p>
      </div>
      <div className="o2">
        <img src={dri} className="om2" alt="Logo" />
        <p>Driving & delevring</p>
      </div>
      <div className="o3">
        <img src={eat} className="om3" alt="Logo" />
        <p>Uber eats</p>
      </div>
      <div className="o4">
        <img src={mer} className="om4" alt="Logo" />
        <p>Merchants & Restaurants</p>
      </div>
      <div className="o5">
        <img src={bike} className="om5" alt="Logo" />
        <p>Bikes & Scooters</p>
      </div>
      <div className="o6">
        <img src={bus} className="om6" alt="Logo" />
        <p>Uber for Business</p>
      </div>
      <div className="o7">
        <img src={truck} className="om7" alt="Logo" />
        <p>Freight</p>
      </div>
      <Link to="/">
        <button className="btnn">Go To Home</button>
      </Link>
    </div>
  );
};
export default Help;

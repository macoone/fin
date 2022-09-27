import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import "./styles.css";
const Ubercard = ({ el }) => {
  console.log("el", el);
  return (
    <div className="screen-2">
      <div className="top-image">
        <Link to={`/desc/${el?.id}`}>
          <img src={el?.image} alt="poster" />
        </Link>
      </div>

      <div className="main-heading">
        <h1 className="title">{el?.name}</h1>

        <div className="row">
          {
            <ReactStars
              count={5}
              value={el?.rating}
              size={24}
              color2={"#A82B00"}
              edit={false}
            />
          }
          <span>{el?.date}</span>
        </div>
      </div>

      <div className="categories">
        <a href="#" className="active">
          Description
        </a>
        <a href="#">website</a>
        <a href="#">company</a>
      </div>

      <p className="description">{el?.email}</p>
      <p className="description">{el?.phone}</p>
      <p className="description">{el?.address.city}</p>

      <div className="btn-play">
        <span>
          {" "}
          <ion-icon className="icon" name="play"></ion-icon>{" "}
        </span>
        Hire
      </div>
    </div>
  );
};
export default Ubercard;

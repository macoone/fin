import { useParams } from "react-router-dom";
import "./styles.css";
import { data } from "./Data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Desc = () => {
  const [user, setUser] = useState({});
  const { idUber } = useParams();
  console.log(useParams());
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${idUber}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="test">
      <h3>{user.name}</h3>
      <h3>{user.username}</h3>
      <h3>{user.email}</h3>
      <Link to="/uberlist">
        <button className="btn">Go To Home</button>
      </Link>
    </div>
  );
};
export default Desc;

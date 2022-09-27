import Ubercard from "./Ubercard";
import Search from "./Search";
import AddUbers from "./addUbers";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import "./styles.css";
const Uberlist = ({ uberlist }) => {
  const [users, setUsers] = useState([]);
  console.log(users, "hello");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(1);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
      }}
    >
      <Search
        nameSearch={nameSearch}
        setNameSearch={setNameSearch}
        setRatingSearch={setRatingSearch}
      />
      <AddUbers />
      {uberlist.map((el, i) => (
        <Ubercard el={el} />
      ))}
      <Container>
        <Row>
          {users
            .filter(
              (el) =>
                el.name
                  .toLowerCase()
                  .includes(nameSearch.toLowerCase().trim()) &&
                el.rating >= ratingSearch
            )
            .map((user, i) => (
              <Ubercard user={user} />
            ))}
        </Row>
      </Container>
    </div>
  );
};
export default Uberlist;

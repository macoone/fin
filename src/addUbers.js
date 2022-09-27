import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddHandler } from "./redux/uberActions";
import Modal from "react-modal";
import "./addUber.css";
const AddMovies = ({ addNewUber }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const dispatch = useDispatch();
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = () => {
    let newUber = {
      name,
      description,
      date,
      type,
      image,
      rating
    };
    dispatch(AddHandler(newUber));

    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={openModal} className="Add-btn">
        add an uber
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add An uber</h1>
        <form>
          <label>Movie Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>uber Release Date</label>
          <input
            type="number"
            name="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Movie Image</label>
          <input
            type="url"
            name="image"
            onChange={(e) => setImage(e.target.value)}
          />
          <label>e-mail</label>
          <input
            type="text"
            name="type"
            onChange={(e) => setType(e.target.value)}
          />
          <label>uber Rating</label>
          <input
            type="Number"
            name="Rating"
            onChange={(e) => setRating(e.target.value)}
          />
          {/* <div className="rating-search">
            <input />
          </div> */}
          <label>phone number</label>
          <textarea
            type="text"
            name="description"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </form>
        <button className="Modal-btn" onClick={handleSubmit}>
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};
export default AddMovies;

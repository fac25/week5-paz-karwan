import { Link } from "react-router-dom";
const Home = ({ handleNameChange }) => {
  // function handleNameChange(e) {
  //   e.preventDefault();
  //   setUsername(e.target.value);
  // }
  return (
    <div>
      <h1>Hangman</h1>
      <label htmlFor="name">Give us your name</label>
      <input type="text" name="name" id="name" onBlur={handleNameChange} />
      <Link to="/game">PLAY</Link>
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
const Home = ({ handlePlay }) => {
  return (
    <div>
      <label htmlFor="name">Give us your name</label>
      <input type="text" name="name" id="name" />
      <button onClick={handlePlay}><Link to="/game">PLAY</Link></button>
    </div>
  );
};

export default Home;

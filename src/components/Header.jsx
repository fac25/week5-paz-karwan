const Header = ({ username }) => {
  return (
    <header>
      <h1>Hangman</h1>
      {!username ? "":<h2>{username}</h2>}
    </header>
  );
};

export default Header;

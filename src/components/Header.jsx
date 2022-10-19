const Header = ({ username }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>Hi {username}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

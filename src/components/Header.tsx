import SearchBar from "./SearchBar";

type HeaderProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

function Header({ setCity }: HeaderProps) {
  return (
    <header className="header">
      <a href="#" className="logo">
        Whatever the Weather
      </a>

      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>Forecast</li>
          <li>About</li>
        </ul>
      </nav>

      <SearchBar setCity={setCity} />
    </header>
  );
}

export default Header;
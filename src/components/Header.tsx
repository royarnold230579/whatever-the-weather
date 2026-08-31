import SearchBar from "./SearchBar";
import weatherEmblem from "../assets/whatever-the-weather-emblem.png";

type HeaderProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

function Header({ setCity }: HeaderProps) {
  return (
    <header className="header">
     <a href="#" className="logo">
  <img
    src={weatherEmblem}
    alt=""
    className="logo-emblem"
  />

  <span className="logo-text">
    <strong>Whatever</strong>
    <span>the Weather</span>
  </span>
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
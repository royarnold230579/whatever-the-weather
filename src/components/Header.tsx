import SearchBar from "./SearchBar";

type HeaderProps = {
    setCity: React.Dispatch<React.SetStateAction<string>>;
  };

  function Header({ setCity }: HeaderProps) {
  return (
    <header>

    <a href="#" className="logo"> Whatever the Weather
</a>

<SearchBar setCity={setCity} />

      <nav>
        <ul>
          <li>Home</li>
          <li>Forecast</li>
          <li>About</li>
        </ul>
      </nav>

      
    </header>
  );
}

export default Header;

import type { Dispatch, SetStateAction } from "react";

type SearchBarProps = {
    setCity: Dispatch<SetStateAction<string>>;
  };

function SearchBar({ setCity }: SearchBarProps) {

    return (
        <div className="search-bar">
            <input onChange={(event) => setCity(event.target.value)} type="text" placeholder="Search for a city..." />
            <button>Search</button>        
            </div>
    )
  }
  
  export default SearchBar
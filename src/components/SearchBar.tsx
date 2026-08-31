import { useState } from "react";

import type {
    Dispatch,
    SetStateAction,
    SyntheticEvent,

  } from "react";
type SearchBarProps = {
    setCity: Dispatch<SetStateAction<string>>;
  };

function SearchBar({ setCity }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (event: SyntheticEvent<HTMLFormElement>) => {event.preventDefault();
        const trimmedSearch = searchTerm.trim();
        if (trimmedSearch) {
          setCity(trimmedSearch);
        }
      };
    return (
<form className="search-bar" onSubmit={handleSearch}>            
<input onChange={(event) => setSearchTerm(event.target.value)} type="text" placeholder="Search for a city..." />
<button type="submit">Search</button>            
</form>
    )
  }
  
  export default SearchBar
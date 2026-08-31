import { useState } from "react";

import type { Dispatch, SetStateAction } from "react";

type SearchBarProps = {
    setCity: Dispatch<SetStateAction<string>>;
  };

function SearchBar({ setCity }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="search-bar">
            <input onChange={(event) => setSearchTerm(event.target.value)} type="text" placeholder="Search for a city..." />
            <button onClick={() => setCity(searchTerm)}>Search</button>       
            </div>
    )
  }
  
  export default SearchBar
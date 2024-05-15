import { useState } from "react";
import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search query!");
      return;
    }

    onSearch(query);
    setQuery("");
  };

  return (
    <header className={css.searchHeader}>
      <form onSubmit={handleSubmit}>
        <div className={css.inputWrapper}>
          <input
            className={css.searchInput}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={css.searchButton} type="submit">
            Search
          </button>
        </div>
      </form>
    </header>
  );
};

export default SearchBar;

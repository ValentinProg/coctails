import React from "react";
import { useGlobalContext } from "../../context";
import './SearchForm.css'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className="sectionSearch">
      <form className="searchForm" onSubmit={handleSubmit}>
        <div className="formControl">
          <label htmlFor="name"> Search Your Favorite Cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
  </section>
  );
};

export default SearchForm;

// 198
import React from "react";

export default function SearchForm({ setSearchTerm }) {
  const searchValue = React.useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <section className="section">
      <h2 className="section-title">search cocktail</h2>
      <form action="" className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={searchCocktail}
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  );
}

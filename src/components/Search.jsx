import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Search = () => {
  const [food, setFood] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    const SEARCH_API =
      'https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputValue;
    axios.get(SEARCH_API).then((response) => {
      setFood(response.data.meals);
    });
  };

  return (
    <div>
      <div className="search__block">
        <h3 className="heading">Find your Meal</h3>
        <form className="search__form" onSubmit={submit}>
          <input
            className="search__input"
            type="text"
            placeholder="Find your meal"
            value={inputValue}
            onChange={handleChange}
          />
          <button className="search__btn" onClick={submit}>
            Search
          </button>
        </form>
      </div>
      <div className="content__block">
        {food.length > 0 ? (
          food.map((meal) => (
            <div key={meal.idMeal} className="food__block">
              <div className="img__block">
                <Link to={{ pathname: `/${meal.idMeal}` }}>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                </Link>
              </div>
              <div>
                <Link to={{ pathname: `/${meal.idMeal}` }}>
                  <h2 className="title">{meal.strMeal}</h2>
                </Link>
                <p className="subtitle">
                  {meal.strCategory} | {meal.strArea}
                </p>
              </div>
            </div>
          ))
        ) : (
          <h3 className="subtitle">Write food name</h3>
        )}
      </div>
    </div>
  );
};

export default Search;

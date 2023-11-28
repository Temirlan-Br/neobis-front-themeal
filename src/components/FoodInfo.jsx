import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

const FoodInfo = () => {
  const [food, setFood] = useState([]);
  const API = 'https://www.themealdb.com/api/json/v1/1/random.php';

  useEffect(() => {
    axios.get(API).then((repos) => {
      setFood(repos.data.meals);
    });
  }, []);

  return (
    <div>
      {food.length > 0 ? (
        <div className="food__block">
          <div className="info__block">
            <p className="heading">Meal of the day</p>
            <h2 className="title">{food[0].strMeal}</h2>
            <p className="subtitle">
              {food[0].strCategory} | {food[0].strArea}
            </p>
          </div>
          <div className="img__block">
            <img src={food[0].strMealThumb} alt="meal" />
          </div>
        </div>
      ) : (
        <h3 className="subtitle">Loading...</h3>
      )}
    </div>
  );
};

export default FoodInfo;

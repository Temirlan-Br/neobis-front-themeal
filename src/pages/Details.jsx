import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const API_DETAILS =
      'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id;
    axios.get(API_DETAILS).then((response) => {
      setDetails(response.data.meals[0]);
    });
  });

  return (
    <div>
      <Header />
      <div className="details">
        <h2 className="title" id={details.idMeal}>
          {details.strMeal}
        </h2>
        <p className="subtitle">
          {details.strCategory} | {details.strArea}
        </p>
        <div>
          <div className="details__block">
            <div className="ingredients">
              {Object.keys(details)
                .filter(
                  (item) => item.includes('strIngredient') && details[item]
                )
                .map((item, idx) => (
                  <p>
                    - {details[item]} <b>{details['strMeasure' + (idx + 1)]}</b>
                  </p>
                ))}
            </div>
            <div className="img__block">
              <img src={details.strMealThumb} alt={details.strMeal} />
            </div>
          </div>
        </div>
        <div className="instruction">
          <h2>Instruction</h2>
          <p>{details.strInstructions}</p>
          <button className="btnYoutube">
            <a href={details.strYoutube}>Watch on Youtube</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;

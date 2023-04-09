import React, { useEffect, useState } from "react";
import axios from "axios";

const MealPage = () => {
  const [meal, setMeal] = useState({});
  

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(
          `https://apis.career.otsimo.xyz/api/restaurant/get/${meal.id}`
        );
        setMeal(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMeal();
  }, []);

  return (
    <div>
      <h1>{meal.name}</h1>
      <p>{meal.description}</p>
      <ul>
        {meal.ingredients &&
          meal.ingredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name} - {ingredient.quality}
            </li>
          ))}
      </ul>
      <p>
        Quality:{" "}
        {meal.ingredients &&
          meal.ingredients.reduce(
            (total, ingredient) => total + ingredient.quality,
            0
          ) / meal.ingredients.length}
      </p>
      <p>
        Price:{" "}
        {meal.ingredients &&
          meal.ingredients.reduce(
            (total, ingredient) => total + ingredient.price,
            0
          )}
      </p>
    </div>
  );
};

export default MealPage;

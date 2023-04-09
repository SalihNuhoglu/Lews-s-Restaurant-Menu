
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MenuPage = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await axios.get('https://apis.career.otsimo.xyz/api/restaurant/listMeals');
      setMeals(response.data);
    };
    fetchMeals();
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleVegetarianChange = () => {
    setIsVegetarian(!isVegetarian);
  };

  const handleVeganChange = () => {
    setIsVegan(!isVegan);
  };

  const filteredMeals = meals.filter((meal) => {
    if (searchTerm !== '' && !meal.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    if (isVegetarian && !meal.isVegetarian) {
      return false;
    }
    if (isVegan && !meal.isVegan) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <h1>Menu</h1>
      <div>
        <input type="text" placeholder="Search meals" value={searchTerm} onChange={handleSearchChange} />
        <label>
          <input type="checkbox" checked={isVegetarian} onChange={handleVegetarianChange} />
          Vegetarian
        </label>
        <label>
          <input type="checkbox" checked={isVegan} onChange={handleVeganChange} />
          Vegan
        </label>
      </div>
      <ul>
        {filteredMeals.map((meal) => (
          <li key={meal.id}>
            <Link to={`/meal/${meal.id}`}>
              <div>{meal.name}</div>
              <div>{meal.description}</div>
              <div>{meal.price}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;
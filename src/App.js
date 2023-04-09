import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import MenuPage from './MenuPage';
import MealPage from './MealPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<WelcomePage/>} />
          <Route exact path="/menu" element={<MenuPage/>} />
          <Route exact path="/meal/:mealId" element={<MealPage/>} />
        </Routes>
    </Router>
  );
}

export default App;
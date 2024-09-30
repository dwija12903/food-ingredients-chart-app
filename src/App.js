import React, { useState, useEffect } from "react";
import FoodIngredientsChart from "./FoodIngredientsChart";
import { PlusCircle, X, RefreshCw, Plus, Minus } from "lucide-react";
import "./App.css";

const App = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [foodData, setFoodData] = useState([
    { name: "Croissant", flour: 50, butter: 30, sugar: 20, eggs: 2, calories: 300, protein: 5 },
    { name: "Pancakes", flour: 40, butter: 25, sugar: 15, eggs: 1, calories: 200, protein: 4 },
    { name: "Cookies", flour: 60, butter: 35, sugar: 25, eggs: 3, calories: 400, protein: 6 },
    { name: "Donuts", flour: 55, butter: 40, sugar: 30, eggs: 2, calories: 350, protein: 5 },
  ]);

  const [isAddingFood, setIsAddingFood] = useState(false);
  const [newFood, setNewFood] = useState({
    name: "", flour: 0, butter: 0, sugar: 0, eggs: 0, calories: 0, protein: 0
  });

  useEffect(() => {
    const savedFoodData = localStorage.getItem("foodData");
    if (savedFoodData) {
      setFoodData(JSON.parse(savedFoodData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("foodData", JSON.stringify(foodData));
  }, [foodData]);

  const colors = ["#8B4513", "#D2691E", "#A0522D", "#CD853F", "#DEB887", "#F4A460", "#D2B48C"];

  const handleButtonClick = (foodName) => {
    setSelectedFood(foodName);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSelection = () => {
    setSelectedFood(null);
  };

  const handleAddFood = () => {
    setIsAddingFood(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewFood({ ...newFood, [name]: name === "name" ? value : parseInt(value) || 0 });
  };

  const handleSubmitNewFood = () => {
    if (newFood.name) {
      setFoodData([...foodData, newFood]);
      setNewFood({ name: "", flour: 0, butter: 0, sugar: 0, eggs: 0, calories: 0, protein: 0 });
      setIsAddingFood(false);
    }
  };

  const handleCancelAddFood = () => {
    setIsAddingFood(false);
    setNewFood({ name: "", flour: 0, butter: 0, sugar: 0, eggs: 0, calories: 0, protein: 0 });
  };

  const handleResetData = () => {
    const confirmReset = window.confirm("Are you sure you want to reset all data? This action cannot be undone.");
    if (confirmReset) {
      localStorage.removeItem("foodData");
      setFoodData([
        { name: "Croissant", flour: 50, butter: 30, sugar: 20, eggs: 2, calories: 300, protein: 5 },
        { name: "Pancakes", flour: 40, butter: 25, sugar: 15, eggs: 1, calories: 200, protein: 4 },
        { name: "Cookies", flour: 60, butter: 35, sugar: 25, eggs: 3, calories: 400, protein: 6 },
        { name: "Donuts", flour: 55, butter: 40, sugar: 30, eggs: 2, calories: 350, protein: 5 },
      ]);
      setSelectedFood(null);
    }
  };

  const filteredData = foodData.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App bg-gray-50 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Food Ingredients Chart</h1>
      <div className="controls mb-6 flex flex-wrap justify-center gap-4">
        <input
          type="text"
          placeholder="Search food..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-64 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        />
        <button onClick={handleAddFood} className="control-button bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg shadow-sm flex items-center transition">
          <PlusCircle className="w-5 h-5 mr-2" />
          Add Food
        </button>
        <button onClick={handleClearSelection} className="control-button bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg shadow-sm flex items-center transition">
          <X className="w-5 h-5 mr-2" />
          Clear Selection
        </button>
        <button onClick={handleResetData} className="control-button bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg shadow-sm flex items-center transition">
          <RefreshCw className="w-5 h-5 mr-2" />
          Reset Data
        </button>
      </div>
      <div className="button-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        {filteredData.map((food, index) => (
          <button
            key={food.name}
            onClick={() => handleButtonClick(food.name)}
            className="food-button p-3 rounded-lg text-white shadow-md hover:shadow-lg transition transform hover:scale-105"
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            {food.name}
          </button>
        ))}
      </div>
      {isAddingFood && (
        <div className="mb-8 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Add New Food</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Food Name</label>
              <input name="name" placeholder="e.g., Pizza" value={newFood.name} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Flour (grams)</label>
              <input name="flour" type="number" placeholder="e.g., 100" value={newFood.flour} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Butter (grams)</label>
              <input name="butter" type="number" placeholder="e.g., 50" value={newFood.butter} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sugar (grams)</label>
              <input name="sugar" type="number" placeholder="e.g., 20" value={newFood.sugar} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Eggs (quantity)</label>
              <input name="eggs" type="number" placeholder="e.g., 2" value={newFood.eggs} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Calories</label>
              <input name="calories" type="number" placeholder="e.g., 300" value={newFood.calories} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Protein (grams)</label>
              <input name="protein" type="number" placeholder="e.g., 10" value={newFood.protein} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition" />
            </div>
          </div>
          <div className="flex justify-end space-x-2 mt-6">
            <button onClick={handleSubmitNewFood} className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md shadow-sm flex items-center transition">
              <Plus className="w-5 h-5 mr-2" />
              Add Food
            </button>
            <button onClick={handleCancelAddFood} className="bg-gray-400 hover:bg-gray-500 text-gray-900 p-2 rounded-md shadow-sm flex items-center transition">
              <Minus className="w-5 h-5 mr-2" />
              Cancel
            </button>
          </div>
        </div>
      )}
      {selectedFood && (
        <div className="chart-container p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
          <FoodIngredientsChart
            food={foodData.find((food) => food.name === selectedFood)}
            colors={colors}
          />
          <div className="nutrition-info mt-6 bg-gray-100 p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Nutritional Information</h3>
            <p className="text-gray-700">Calories: {foodData.find((food) => food.name === selectedFood).calories}</p>
            <p className="text-gray-700">Protein: {foodData.find((food) => food.name === selectedFood).protein}g</p>
          </div>
        </div>
      )}

      <footer className="fixed bottom-0 left-0 w-full bg-gray-100 border-t border-gray-300 py-4 mt-8 text-center text-gray-700 text-sm shadow-lg">
        <div className="flex justify-center items-center space-x-4">
          <p>Created by <a href="https://linkedin.com/in/dwijapanchal">
                 Dwija Panchal
            </a></p>
        </div>
      </footer>

    </div>
  );
};

export default App;
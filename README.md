# 🍽️ Food Ingredients Chart App

Welcome to the **Food Ingredients Chart App**! This is a fun and simple app where you can view, add, and visualize food ingredients along with their nutritional information. The app supports interactive charts, such as bar charts and pie charts, to make it easy to see the composition of each food item. Whether you're tracking calories, protein, or specific ingredients like flour and sugar, this app has you covered! 🥐🥞🍪🍩

## 📜 Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Technologies Used](#technologies-used)
5. [Future Improvements](#future-improvements)

<a name="features"></a>

## ✨ Features 

- **Search Functionality 🔍**: Instantly find food items by name using the search bar. The list dynamically updates as you type.
  
- **Add New Food 🆕**: Add custom food items by specifying ingredients like flour, butter, sugar, eggs, calories, and protein.

- **Ingredient Visualizations 📊**:
  - Bar charts and pie charts allow you to visually compare ingredient proportions in a dish.
  - The charts are generated using **Recharts**, making them interactive and responsive.

- **Persistent Data 💾**: The food data is saved locally in the browser using `localStorage`, so your custom food entries will be available even after refreshing the page.

- **Reset Function 🔄**: You can reset the food data back to the default state at any time.

<a name="installation"></a>

## 🛠️ Installation 

To get started with the Food Ingredients Chart App locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/dwija12903/food-ingredients-chart-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd food-ingredients-chart-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The app should now be running on `http://localhost:3000` in your browser!


<a name="usage"></a>

## 🚀 Usage 

### **Home Page**:
- **Search for food**: Start typing the name of the food in the search bar to filter through available options.
- **Select food**: Click any food button to view its detailed ingredients and nutritional information.
- **Add food**: Use the "Add Food" button to enter a new dish's name, ingredients, and nutritional information.

### **Charts**:
- **Bar Chart**: Displays a vertical representation of each ingredient's quantity.
- **Pie Chart**: Illustrates the proportion of each ingredient in the food.

<a name="technologies-used"></a>

## 💻 Technologies Used 

- **React**
- **Recharts**: For rendering the interactive charts.
- **Lucide Icons**: For stylish and accessible icons like "Add", "Clear", and "Reset".
- **Tailwind CSS**

<a name="future-improvements"></a>

## 🔮 Future Improvements 

- **Nutrition Facts Expansion**: Provide a breakdown of more nutritional values (fats, carbs, etc.).
- **Food Categories**: Add categories for better food organization.
- **Export/Import Data**: Allow users to export and import food data for sharing or backup purposes.
- **User Authentication**: Implement user login functionality to save personalized data across devices.

---

**Enjoy managing your favorite food recipes with the Food Ingredients Chart App!** 🍽️
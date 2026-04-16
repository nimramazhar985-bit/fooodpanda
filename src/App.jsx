import { useState } from "react";
import MenuItem from "./components/MenuItem";

function App() {
  // 🍛 Menu Data
  const menu = [
    { id: 1, name: "Chicken Biryani", price: 500, isSpicy: true },
    { id: 2, name: "Beef Biryani", price: 550, isSpicy: false },
    { id: 3, name: "Zinger Burger", price: 400, isSpicy: true },
    { id: 4, name: "Fries", price: 200, isSpicy: false },
  ];

  // 🔘 State for filter button
  const [showNonSpicy, setShowNonSpicy] = useState(false);

  // 🔁 Filter logic
  const filteredMenu = showNonSpicy
    ? menu.filter((item) => item.isSpicy === false)
    : menu;

  return (
    <div className="p-5">
      {/* 🔘 Button */}
      <button
        onClick={() => setShowNonSpicy(!showNonSpicy)}
        className="bg-green-600 text-white px-4 py-2 rounded mb-5"
      >
        {showNonSpicy ? "Show All Items" : "Show Non-Spicy Only"}
      </button>

      {/* 🍽 Menu List */}
      {filteredMenu.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
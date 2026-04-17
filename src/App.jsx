import { useState } from "react";
import MenuItem from "./components/MenuItem";

function App() {
  const menu = [
    { id: 1, name: "Chicken Biryani", price: 500, isSpicy: true },
    { id: 2, name: "Beef Biryani", price: 550, isSpicy: false },
    { id: 3, name: "Vegetable Biryani", price: 400, isSpicy: true },
    { id: 4, name: "Paneer Biryani", price: 200, isSpicy: false },
    { id: 5, name: "Fish Biryani", price: 900, isSpicy: true },
    { id: 6, name: "Egg Biryani Biryani", price: 300, isSpicy: true },
    { id: 7, name: "Shrimp Biryani", price: 700, isSpicy: true },
    { id: 8, name: "Mix Veg  Biryani", price: 380, isSpicy: true },
  ];

  const [showNonSpicy, setShowNonSpicy] = useState(false);

  const filteredMenu = showNonSpicy
    ? menu.filter((item) => !item.isSpicy)
    : menu;

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">
        🍛 Foodpanda Biryani Menu
      </h1>

      <div className="text-center mb-4">
        <button
          className="btn btn-dark px-4"
          onClick={() => setShowNonSpicy(!showNonSpicy)}
        >
          {showNonSpicy ? "Show All Items" : "Show Non-Spicy Only"}
        </button>
      </div>

      <div className="row g-3">
        {filteredMenu.map((item) => (
          <div className="col-md-4" key={item.id}>
            <MenuItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
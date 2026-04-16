function MenuItem({ item }) {
  return (
    <div
      className={`p-4 m-2 border rounded shadow ${
        item.isSpicy ? "bg-red-100 border-red-400" : "bg-white"
      }`}
    >
      {/* 🍛 Name + 🔥 emoji */}
      <h2 className="text-xl font-bold">
        {item.name} {item.isSpicy ? "🔥" : ""}
      </h2>

      {/* 💰 Price */}
      <p className="text-gray-700">Price: Rs {item.price}</p>
    </div>
  );
}

export default MenuItem;
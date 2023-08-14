import { useState } from "react";

export default function EntertainmentTravelExpense({ moneyLeftSavings }) {
  const [itemEntertainName, setItemEntertainName] = useState("");
  const [itemEntertainPrice, setItemEntertainPrice] = useState(0);
  const [itemEntertainList, setItemEntertainList] = useState([]);

  const [itemTravelName, setItemTravelName] = useState("");
  const [itemTravelPrice, setItemTravelPrice] = useState(0);
  const [itemTravelList, setItemTravelList] = useState([]);

  const [totalCost, setTotalCost] = useState(0); // Initialize total cost

  const handleAddEnterItem = () => {
    if (
      !itemEntertainName.trim() &&
      !(itemEntertainPrice > 0) &&
      !itemTravelName.trim() &&
      !(itemTravelPrice > 0)
    ) {
      alert(
        "Please enter both Entertainment item and price, and Travel item and price."
      );
      return;
    }

    if (itemEntertainName.trim() && itemEntertainPrice > 0) {
      const newEntertainItem = {
        name: itemEntertainName,
        price: itemEntertainPrice
      };
      setItemEntertainList([...itemEntertainList, newEntertainItem]);
      setItemEntertainName("");
      setItemEntertainPrice(0);
    }

    if (itemTravelName.trim() && itemTravelPrice > 0) {
      const newTravelItem = {
        name: itemTravelName,
        price: itemTravelPrice
      };
      setItemTravelList([...itemTravelList, newTravelItem]);
      setItemTravelName("");
      setItemTravelPrice(0);
    }

    // Calculate the total cost of all entertainment items
    const totalEntertainmentCost = itemEntertainList.reduce(
      (total, item) => total + item.price,
      0
    );

    // Calculate the total cost of all travel items
    const totalTravelCost = itemTravelList.reduce(
      (total, item) => total + item.price,
      0
    );

    // Calculate the combined total cost of entertainment and travel items
    const newTotalCost = totalEntertainmentCost + totalTravelCost;

    // Update the total cost in state
    setTotalCost(newTotalCost);
  };

  return (
    <div className="card-income">
      <h1 className="card-tax" type="text">
        Balance after Savings: R{moneyLeftSavings}
      </h1>
      <h2 className="h2-card">Leisure Expenses</h2>

      {/* ENTERTAINMENT EXPENSE */}
      <div className="item-text">
        <label>Entertainment item:</label>
      </div>
      <input
        className="input-item"
        placeholder="Enter item here"
        value={itemEntertainName}
        onChange={(e) => setItemEntertainName(e.target.value)}
      />
      <input
        className="input-item"
        placeholder="Enter item price here"
        type="number"
        value={itemEntertainPrice}
        onChange={(e) => setItemEntertainPrice(Number(e.target.value))}
      />

      <button className="button-add" onClick={handleAddEnterItem}>
        ADD
      </button>

      <div className="card-tax" type="text">
        <ul>
          {itemEntertainList.map((item, index) => (
            <li key={index}>
              {item.name} - R{item.price}
            </li>
          ))}
        </ul>
      </div>

      {/* TRAVEL EXPENSE */}
      <div className="item-text">
        <label>Travel Expense:</label>
      </div>
      <input
        className="input-item"
        placeholder="Enter item here"
        value={itemTravelName}
        onChange={(e) => setItemTravelName(e.target.value)}
      />
      <input
        className="input-item"
        placeholder="Enter item price here"
        type="number"
        value={itemTravelPrice}
        onChange={(e) => setItemTravelPrice(Number(e.target.value))}
      />

      <button className="button-add" onClick={handleAddEnterItem}>
        ADD
      </button>
      <div className="card-tax" type="text">
        <ul>
          {itemTravelList.map((item, index) => (
            <li key={index}>
              {item.name} - R{item.price}
            </li>
          ))}
        </ul>
      </div>

      <div className="card-money-left" type="text">
        <p>Total cost: R{totalCost}</p>
      </div>
      <div className="card-money-left" type="text">
        <p>Money left: R{moneyLeftSavings - totalCost}</p>
      </div>
    </div>
  );
}
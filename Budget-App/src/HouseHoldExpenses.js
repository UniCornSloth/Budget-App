import { useState } from "react";

export default function HouseHoldExpenses({
  dspBalanceAfterBills,
  moneyLeft,
  setMoneyLeft
}) {
  // State variable to hold the item name, price and the list items
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemList, setItemList] = useState([]);
  // State for price deducted from total balance
  const [totalCost, setTotalCost] = useState(0);

  // Function to add entered item to the list creating new array with item name and price
  const handleAddItem = () => {
    // If the input contains item name and item price
    if (itemName.trim() && itemPrice > 0) { // Check if item name is not empty and price is greater than 0

      // Check if adding the new item will exceed the balance after bills
      const newTotalCost = totalCost + itemPrice;
      if (newTotalCost > dspBalanceAfterBills) {
        // Show an alert if adding the item exceeds the balance
        alert("NOT ENOUGH FUNDS.");
        return;
      }

      // Create a new object with the entered name and price
      const newItem = {
        name: itemName,
        price: itemPrice
      };

      // Updating the total cost and money left
      setTotalCost(newTotalCost);
      setMoneyLeft(dspBalanceAfterBills - newTotalCost); // Update the moneyLeft state in App

      // Use setItemList to create a new array of items
      // Adding the new item to the list of items using the spread operator
      setItemList([...itemList, newItem]);

      // Resetting the item and price input after adding item and price
      setItemName("");
      setItemPrice(0);
     
    } else {      
      alert("Please enter both Item and price")
    }
  };

  // Function to handle money left after item has been added.
  const handleMoneyLeft = () => {
    const newMoneyLeft = dspBalanceAfterBills - totalCost;
    setMoneyLeft(newMoneyLeft); // Update the moneyLeft state in App
    return newMoneyLeft;
  };

  console.log("Money Left:", moneyLeft);

  return (
    <div className="card-income">
      <h1 className="card-tax" type="text">
        Balance after bills: R{dspBalanceAfterBills}
      </h1>
      <h2 className="h2-card">Total expenses for food:</h2>

      <div className="item-text">
        <label>Item-name:</label>
      </div>

      {/* This is the input where you enter your item name to be added to the list of items */}
      <input
        className="input-item"
        placeholder="Enter item here"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />

      <div className="item-text">
        <label>Item-price:</label>
      </div>

      {/* This is the input for the price of the item entered */}
      <input
        className="input-item"
        placeholder="Enter item price here"
        type="number"
        value={itemPrice}
        onChange={(e) => setItemPrice(Number(e.target.value))}
      />

      <button className="button-add" onClick={handleAddItem}>
        ADD
      </button>
      <div className="card-tax" type="text">
        <ul>
          {/* Rendering the "itemList", mapping through the array and display each item's name and price as list items  */}
          {itemList.map((item, index) => (
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
        <p>Money left: R{handleMoneyLeft()}</p>
      </div>
    </div>
  );
}

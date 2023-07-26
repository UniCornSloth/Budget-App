import { useState } from "react";

export default function HouseHoldExpenses({displayedBalanceAfterBills}) {
  
  // State variable to hold the item name, price and the list items
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemList, setItemList] = useState([]);
  // State for price deducted from total balance
  const [totalCost, setTotalCost] = useState(0);
  // const [moneyLeft, setMoneyLeft] = useState(amountAfterTax);
  // useEffect(()=> {console.log('Amount after tax:',amountAfterTax)}, [amountAfterTax])
  // useEffect(()=> {console.log("Money left:",moneyLeft)}, [moneyLeft])

  // Function to add entered item to the list creating new array with item name and price
  const handleAddItem = () => {
    // If the input contains item name and item price
    if (itemName && itemPrice) {
      // Create a new object with the entered name and price
      const newItem = {
        name: itemName,
        price: itemPrice
      };

      // Updating the total cost and money left
      const newTotalCost = totalCost + newItem.price;

      // Use setItemList to create new array of items
      // Adding new item to the list of items using spread operator
      setItemList([...itemList, newItem]);
      setTotalCost(newTotalCost);

      // Resetting the item and price input after adding item and price
      setItemName("");
      setItemPrice("");
    }
  };

  // Function to handle the money left after item has been added.
  const handleMoneyLeft = () => {
    return displayedBalanceAfterBills - totalCost;
  };

  return (
    <div className="card-income">
      <h1 className="card-tax" type="text">
        Balance after bills: R{displayedBalanceAfterBills}
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
        <p>Money left: R{handleMoneyLeft()}</p>
      </div>
    </div>
  );
}

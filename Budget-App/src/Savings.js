import { useState,useEffect } from "react";

export default function Savings({balanceAfterEssentials,updateBalanceAfterEssentials}) {
const [savings, setSavings] = useState(0)
const [displayedSavings, setDisplayedSavings] = useState(0);
const [totalMoneyLeft, setTotalMoneyLeft] = useState(0)

useEffect(() => {
  console.log("Total money left in Savings:", totalMoneyLeft);
}, [totalMoneyLeft]);


const handleAddSavings = () => {
  const savingsValue = parseInt(savings)
  
  
  setDisplayedSavings(savingsValue);

  const updatedBalanceAfterEssentials = balanceAfterEssentials - savingsValue;
  setTotalMoneyLeft(updatedBalanceAfterEssentials);
  // Use the callback function to update the parent component's state
  updateBalanceAfterEssentials(updatedBalanceAfterEssentials);


  
};

  return (
    <div className="card-income">
      <h1 className="card-tax" type="text">
        Balance after Essentials: R{balanceAfterEssentials}
      </h1>
      <h2 className="h2-card">Enter savings amount</h2>

      <div className="item-text">
        <label>Savings:</label>
      </div>

      <input
        className="input-item"
        placeholder="0"
        min={0}
        value={savings} 
        onChange={(e)=> setSavings(e.target.value)}   
        type="number"       
      />
     
      <button className="button-add" onClick={handleAddSavings}>
        ADD
      </button>

      <div className="card-money-left" type="text">
        <p>Total Savings: R{displayedSavings}</p>
      </div>
      <div className="card-money-left" type="text">
        <p>Total money left: R{totalMoneyLeft}</p>
      </div>
    </div>
  );
}

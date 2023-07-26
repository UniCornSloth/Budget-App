import { useState } from "react";

export default function Income2({ updateDisplayedMonthlyIncome }) {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [displayedMonthlyIncome, setDisplayedMonthlyIncome] = useState("");

  const handleAddIncome = () => {
    // Convert monthlyIncome to an integer
    const incomeValue = parseInt(monthlyIncome);
    // Update the displayedMonthlyIncome in the local state
    setDisplayedMonthlyIncome(incomeValue);
    // Pass the incomeValue to the parent component using the callback function
    updateDisplayedMonthlyIncome(incomeValue);
    console.log("Income:", incomeValue);
  };

  

  return (
    <div className="card-income">
      <h2 className="card-h2">Income</h2>
      <label>Monthly Income:</label>
      {/* Input field to enter said income */}
      <input
        className="input-income"
        placeholder="Enter your income here"
        onChange={(e) => setMonthlyIncome(e.target.value)}></input>
      {/* Button to calculate income after tax */}
      <button className="button-calculate" onClick={handleAddIncome}>
        Set
      </button>
      <div>Income: {displayedMonthlyIncome}</div>
    </div>
  );
}

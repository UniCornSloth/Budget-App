import { useState } from "react";

export default function Income2({ updateDspMonthlyIncome }) {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [dspMonthlyIncome, setDspMonthlyIncome] = useState("");

  const handleAddIncome = () => {
    // Convert monthlyIncome to an integer
    const incomeValue = parseInt(monthlyIncome);
    // Update the displayedMonthlyIncome in the local state
    setDspMonthlyIncome(incomeValue);
    // Pass the incomeValue to the parent component using the callback function
    updateDspMonthlyIncome(incomeValue);
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
      <div>Income: {dspMonthlyIncome}</div>
    </div>
  );
}

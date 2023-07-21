import { useState } from "react";

export default function Income({ amountAfterTax, setAmountAfterTax }) {
  const [income, setIncome] = useState("");
  const [taxAmount, setTaxAmount] = useState(0);

  // Function to calculate income after tax percentage has been deducted from income
  const handleCalculate = () => {
    const taxRate = 0.099; // 9.9% tax rate
    const calculatedTaxAmount = (Number(income) * taxRate).toFixed(2);
    const calculatedAmountAfterTax =(Number(income) - calculatedTaxAmount).toFixed(2);

    // Updating the state with the calculated tax amount and income after tax
    setTaxAmount(calculatedTaxAmount);
    setAmountAfterTax(calculatedAmountAfterTax);

    // Logging result to console for preference
    console.log("Income after tax:", calculatedAmountAfterTax);
  };
  return (
    <div className="card-income">
      <h2 className="card-h2">Income</h2>
      <label htmlFor="income-input">Monthly Income:</label>
      {/* Input field to enter said income */}
      <input
        id="income-input"
        className="input-income"
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}></input>

      {/* Button to calculate income after tax */}
      <button className="button-calculate" onClick={handleCalculate}>
        Calculate
      </button>
      <div className="card-tax" type="text">
        {/* Display calculated tax and income amount after tax has been deducted */}
        <p>Tax amount = R{taxAmount} (9.9% tax rate)</p>
        <p>Income after tax = R{amountAfterTax}</p>
      </div>
    </div>
  );
}

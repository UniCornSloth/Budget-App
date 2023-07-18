import { useState } from "react";

export default function Income() {
  const [income, setIncome] = useState("");
  const [taxAmount, setTaxAmount] = useState(0);
  const [amountAfterTax, setAmountAfterTax] = useState(0);

  const handleCalculate = () => {
    const taxRate = 0.099; // 9.9% tax rate
    const calculatedTaxAmount = Number(income) * taxRate;
    const calculatedAmountAfterTax = Number(income) - calculatedTaxAmount;
    setTaxAmount(calculatedTaxAmount);
    setAmountAfterTax(calculatedAmountAfterTax);
    console.log("Income after tax:", calculatedAmountAfterTax);
  };
  return (
    <div className="card-income">
      <h2 className="card-h2">Income</h2>
      <label htmlFor="income-input">Monthly Income:</label>
      <input
        id="income-input"
        className="input-income"
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}></input>
      <button className="button-calculate" onClick={handleCalculate}>
        Calculate
      </button>

      <div className="card-tax" type="text">
        <p>Tax amount = R{taxAmount} (9.9% tax rate)</p>
        <p>Income after tax = R{amountAfterTax}</p>
      </div>
    </div>
  );
}

import { useState } from "react";

export default function Savings({ moneyLeft, setMoneyLeftSavings }) {
  const [savings, setSavings] = useState(0);
  const [deductSavings, seDeductSavings] = useState(0);
  const [displayedTotalSavings, setDisplayedSavings] = useState(0);
  

  // Function adding entered savings to the total savings display
  const handleAddSavings = () => {
    const savingsValue = parseInt(savings);
    const totalSavings = displayedTotalSavings + savingsValue;

    if (totalSavings > moneyLeft) {
      alert("NOT ENOUGH FUNDS");
      setSavings(0);
    } else {
      setDisplayedSavings(totalSavings);
      setSavings(0);
    }
  };

  // Function deducting from savings if user needed to
  const handleDeductSavings = () => {
    const deductionValue = parseInt(deductSavings);
    const totalSavings = displayedTotalSavings - deductionValue;

    setDisplayedSavings(totalSavings);
    seDeductSavings(0);
  };

  // Function deducting savings from total money left.
  const handleMoneyLeftSavings = () => {
    const totalMoneyLeft = moneyLeft - displayedTotalSavings;
    setMoneyLeftSavings(totalMoneyLeft); // Update the moneyLeft state in App
    return totalMoneyLeft;
  };

  return (
    <div className="card-income">
      <h1 className="card-tax" type="text">
        Balance after Essentials: R{moneyLeft}
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
        onChange={(e) => setSavings(e.target.value)}
        type="number"
      />

      <div className="item-text">
        <label>Deduct From Savings:</label>
      </div>

      <input
        className="input-item"
        placeholder="0"
        min={0}
        value={deductSavings}
        onChange={(e) => seDeductSavings(e.target.value)}
        type="number"
      />

      <button className="button-add" onClick={handleAddSavings}>
        ADD
      </button>
      <button className="button-add" onClick={handleDeductSavings}>
        DEDUCT
      </button>

      <div className="card-money-left" type="text">
        <p>Total Savings: R{displayedTotalSavings}</p>
      </div>
      <div className="card-money-left" type="text">
        <p>Total money left: R{handleMoneyLeftSavings()}</p>
      </div>
    </div>
  );
}

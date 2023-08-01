import { useState } from "react";

export default function BillsExpense({
  dspMonthlyIncome,
  dspBalanceAfterBills,
  updateDspBalanceAfterBills
}) {
  const [rent, setRent] = useState("");
  const [medical, setMedical] = useState("");
  const [waterElect, setWaterElect] = useState("");

  // Function to update the total bills whenever any input value changes
  const updateTotalBills = () => {
    // parseInt means changing string to number i.e Setting string to integer
    let expense = 0;
    if (rent) {
      expense += parseInt(rent);
    }
    if (medical) {
      expense += parseInt(medical);
    }
    if (waterElect) {
      expense += parseInt(waterElect);
    }if (expense > dspMonthlyIncome){
      updateDspBalanceAfterBills(0)
      alert("NOT ENOUGH FUNDS")
    }else{

      updateDspBalanceAfterBills(dspMonthlyIncome - expense);
    }   
  };

  return (
    <div className="card-income">
      <h1 className="card-tax" type="text">
        Income Balance: R{dspMonthlyIncome}
      </h1>
      <h2 className="h2-card">Bills expenses</h2>

      <div className="item-text">
        <label>Rent:</label>
      </div>

      <input
        className="input-item"
        placeholder="0"
        min={0}
        max={50000}
        type="number"
        value={rent}
        onChange={(e) => setRent(e.target.value)}
      />

      <div className="item-text">
        <label>Medical:</label>
      </div>

      <input
        className="input-item"
        placeholder="0"
        min={0}
        max={10000}
        type="number"
        value={medical}
        onChange={(e) => setMedical(e.target.value)}
      />

      <div className="item-text">
        <label>Water & Electric:</label>
      </div>

      <input
        className="input-item"
        placeholder="0"
        min={0}
        max={10000}
        type="number"
        value={waterElect}
        onChange={(e) => setWaterElect(e.target.value)}
      />
      <button className="button-add" onClick={updateTotalBills}>
        ADD
      </button>

      <div className="card-money-left" type="text">
        <p>Total balance after bills: R{dspBalanceAfterBills}</p>
      </div>
    </div>
  );
}

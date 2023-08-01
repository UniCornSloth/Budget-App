import { useState } from "react";

import HeadLogin from "./HeadLogin";
import IncomeTax from "./IncomeTax";
import MainIncome from "./MainIncome";
import BillsExpense from "./BillsExpense";
import HouseHoldExpenses from "./HouseHoldExpenses";
import Savings from "./Savings";
import Footer from "./Footer";

export default function App() {
  const [dspMonthlyIncome, setDspMonthlyIncome] = useState("");
  const [dspBalanceAfterBills, setDspBalanceAfterBills] = useState("");
  const [moneyLeft, setMoneyLeft] = useState("");
  const [moneyLeftSavings, setMoneyLeftSavings] = useState("");

  // Callback function to update displayedMonthlyIncome in the App component
  const updateDspMonthlyIncome = (income) => {
    setDspMonthlyIncome(parseInt(income)); // Convert income to integer
  };

  // Callback function to update balance expense
  const updateDspBalanceAfterBills = (totalBillsAdded) => {
    setDspBalanceAfterBills(parseInt(totalBillsAdded));
  };

  // Callback to update balance after bills

  return (
    <div>
      <HeadLogin />

      <IncomeTax />

      <MainIncome updateDspMonthlyIncome={updateDspMonthlyIncome} />

      <BillsExpense
        dspMonthlyIncome={dspMonthlyIncome}
        dspBalanceAfterBills={dspBalanceAfterBills}
        updateDspBalanceAfterBills={updateDspBalanceAfterBills}
      />

      <HouseHoldExpenses
        dspBalanceAfterBills={dspBalanceAfterBills}
        moneyLeft={moneyLeft}
        setMoneyLeft={setMoneyLeft}
      />

      <Savings
        moneyLeft={moneyLeft}
        moneyLeftSavings={moneyLeftSavings}
        setMoneyLeftSavings={setMoneyLeftSavings}
      />

      {/* <EntertainmentExpense /> */}

      {/* <TravelExpense /> */}

      <Footer />
    </div>
  );
}

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
  const [balanceAfterEssentials, setDspBalanceAfterEssentials] = useState("");

  // Callback function to update displayedMonthlyIncome in the App component
  const updateDspMonthlyIncome = (income) => {
    setDspMonthlyIncome(parseInt(income)); // Convert income to integer
  };

  // Callback function to update balance expense
  const updateDspBalanceAfterBills = (totalBillsAdded) => {
    setDspBalanceAfterBills(parseInt(totalBillsAdded));
  };

  const updateBalanceAfterEssentials = (totalMoneyLeft) => {
    setDspBalanceAfterEssentials(parseInt(totalMoneyLeft));
    console.log("Money left after bills:",totalMoneyLeft);
  };

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
        balanceAfterEssentials={balanceAfterEssentials}
      />

      <Savings
      balanceAfterEssentials={balanceAfterEssentials}
      updateBalanceAfterEssentials={updateBalanceAfterEssentials}
      />

      {/* <EntertainmentExpense /> */}

      {/* <TravelExpense /> */}

      <Footer />
    </div>
  );
}

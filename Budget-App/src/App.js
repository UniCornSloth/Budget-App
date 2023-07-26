import { useState } from "react";

import HeadLogin from "./HeadLogin";
import IncomeTax from "./IncomeTax";
import MainIncome from "./MainIncome";
import BillsExpense from "./BillsExpense";
import HouseHoldExpenses from "./HouseHoldExpenses";
import Footer from "./Footer";

export default function App() {
  const [displayedMonthlyIncome, setDisplayedMonthlyIncome] = useState("");
  const [displayedBalanceAfterBills,setDisplayedBalanceAfterBills] = useState("")
  

  // Callback function to update displayedMonthlyIncome in the App component
  const updateDisplayedMonthlyIncome = (income) => {
    setDisplayedMonthlyIncome(parseInt(income)); // Convert income to integer
  };

  // Callback function to update balance expense
  const updateDisplayedBalanceAfterBills = (totalBillsAdded) => {
    setDisplayedBalanceAfterBills(parseInt(totalBillsAdded));
  };
  return (
    <div>
      <HeadLogin />
      <IncomeTax />
      <MainIncome updateDisplayedMonthlyIncome={updateDisplayedMonthlyIncome} />
      <BillsExpense 
      displayedMonthlyIncome={displayedMonthlyIncome} 
      displayedBalanceAfterBills={displayedBalanceAfterBills} 
      updateDisplayedBalanceAfterBills={updateDisplayedBalanceAfterBills} />
      <HouseHoldExpenses  displayedBalanceAfterBills={displayedBalanceAfterBills}/>
      <Footer />
    </div>
  );
}

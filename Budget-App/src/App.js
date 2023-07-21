import { useState } from "react";

import HeadLogin from "./HeadLogin";
import Footer from "./Footer";
import Income from "./Income";
import TotalIncome from "./total-Income-expenditures";

// import { useState } from "react";

export default function App() {
  const [amountAfterTax, setAmountAfterTax] = useState(0);
  // const [isLogin, setIsLogin] = useState(false)

  return (
    <div>
      <HeadLogin />
      <Income
        amountAfterTax={amountAfterTax}
        setAmountAfterTax={setAmountAfterTax}
      />
      {/* {amountAfterTax > 0 ? <TotalIncome amountAfterTax={amountAfterTax} />: <div>Calculate Your Income First</div>}      */}
      <TotalIncome amountAfterTax={amountAfterTax}/>
      <Footer />
    </div>
  );
}

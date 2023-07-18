import HeadLogin from "./HeadLogin";
import Footer from "./Footer";
import Income from "./Income";
// import { useState } from "react";

export default function App() {
  // const [isLogin, setIsLogin] = useState(false)

  return (
    <div>
      <HeadLogin />
      <Income />
      <Footer />
    </div>
  );
}

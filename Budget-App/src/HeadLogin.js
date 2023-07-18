import { useState } from "react";

export default function HeadLogin() {
  // Retrieving text from inputs using state. Set state according to what the input will be
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Create handle submit function to submit event fired (login details entered) and log them to console
  const handleSubmit = (e) => {
    // Prevent default behavior on submit form
    e.preventDefault();

    // Check if login details are empty
    if (username === "" || password === "") {
      alert("Username and Password required");
      return;
    }

    console.log("Username:", username);
    console.log("Password:", password);
    
    // Reset username and password after login
    setUsername("")
    setPassword("")
   
  };

  return (
    <div>
      <h1 className="header">BudgetApp 404</h1>
      <form className="form-login" onSubmit={handleSubmit}>
        <label className="label">Username</label>
        <input
          className="input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="label">Password</label>
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button-submit-login" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

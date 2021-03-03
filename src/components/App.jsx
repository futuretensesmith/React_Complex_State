import React, { useState } from "react";

function App() {
  const [first, updateFirst] = useState("");
  const [last, updateLast] = useState("");

  function firstName(event) {
    updateFirst(event.target.value);
    //console.log(event.target.value)
  }
  function lastName(event) {
    updateLast(event.target.value);
    //console.log(event.target.value)
  }

  return (
    <div className="container">
      <h1>
        Hello {first} {last}
      </h1>
      <form>
        <input
          onChange={firstName}
          name="fName"
          placeholder="First Name"
          value={first}
        />
        <input
          onChange={lastName}
          name="lName"
          placeholder="Last Name"
          value={last}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <label htmlFor="fruit">Fruit</label>
      <select
        id="fruit"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="select a fruit"
      >
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
    </>
  );
}

export default App;

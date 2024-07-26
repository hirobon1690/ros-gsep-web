import { useState } from 'react'

import "./App.css";
import "mdui/mdui.css";
import "mdui";
import "mdui/components/button.js";
import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </div>
  );
}

export default App

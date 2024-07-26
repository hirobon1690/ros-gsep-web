import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "mdui/mdui.css";
import "mdui";
import "mdui/components/button.js";
import type { Button } from 'mdui/components/button.js';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <mdui-button>Hello, world!</mdui-button>
    </>
  );
}

export default App

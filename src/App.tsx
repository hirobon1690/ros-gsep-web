import { useState, useEffect, useRef } from "react";

import "./App.css";
import "mdui";
import "mdui/mdui.css";
import "mdui/components/button.js";
import "mdui/components/navigation-rail.js";
import "mdui/components/navigation-rail-item.js";
import "mdui/components/icon.js";
import "mdui/functions/setColorScheme.js";
import { setColorScheme } from "mdui/functions/setColorScheme.js";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { StatesView } from "./pages/StatesView";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const colorSchemeElement = useRef(null);

  function handleClick() {
    setCount(count + 1);
  }

  useEffect(() => {
    setColorScheme("#ff0000");
  }, []);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <mdui-navigation-rail contained>
        <mdui-button-icon icon="menu" slot="top"></mdui-button-icon>
        <mdui-button-icon icon="settings" slot="bottom"></mdui-button-icon>
        <mdui-navigation-rail-item
          icon="home--outlined"
          onClick={() => navigate("/")}
        >
          Home
        </mdui-navigation-rail-item>
        <mdui-navigation-rail-item
          icon="person--outlined"
          onClick={() => navigate("/about")}
        >
          About
        </mdui-navigation-rail-item>
      </mdui-navigation-rail>

      <div
        style={{
          height: "100",
          overflow: "auto",
          backgroundColor: "rgb(var(--mdui-color-surface))",
        }}
      >
        <div style={{ height: "90vh" }}>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<div>About</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <StatesView />
    </div>
  );
}

export default App;

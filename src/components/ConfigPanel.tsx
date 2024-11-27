import { React, useState } from "react";
import "mdui/components/card.js";
import "mdui/components/button-icon.js";
import type { Card } from "mdui/components/card.js";
import type { ButtonIcon } from "mdui/components/button-icon.js";
import "./panel.css"

const ConfigPanel = (props: { open: boolean }) => {

  const [open, setOpen] = useState(props.open);

  function handleClick() {
    setOpen(!open);
  }


  if (!open) {
    return (
      <div>
        <mdui-button-icon
          icon="tune"
          onClick={handleClick}
          style={{ position: "absolute", top: 20, right: 20 }}
        ></mdui-button-icon>
      </div>
    );
  } else {
    return (
      <div  className="slide-in" style={{ position: "absolute", right: 0 }}>
        <mdui-card
          variant="filled"
          style={{
            width: "400px",
            height: "90vh",
            right: 0,
            boxShadow: "2px 2px 2px 2px rgb(0 0 0 / 40%)",
            padding: "5px 20px",
            zIndex: 1000,
          }}
        >
          <h2>Config</h2>
          <table>
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
              </tr>
              <tr>
                <td>Data 4</td>
                <td>Data 5</td>
              </tr>
            </tbody>
          </table>
          <mdui-button-icon
            icon="close"
            onClick={handleClick}
            style={{ position: "absolute", top: 20, right: 20 }}
          ></mdui-button-icon>
        </mdui-card>
      </div>
    );
  }
};

export default ConfigPanel;

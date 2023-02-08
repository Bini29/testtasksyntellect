import React from "react";
import "./App.css";
import HelpControl from "./components/HelpControl";
import TextControl from "./components/TextControl";

function App() {
  return (
    <div className="app">
      <span>Текстовыe контролы</span>
      <TextControl
        rightButtons={[
          { text: "clear", onClick: () => "" },
          {
            text: "Hello world",
            onClick: () => "Hello world!",
          },
        ]}
      />
      <TextControl
        rightButtons={[
          {
            text: "alert",
            onClick: (value) => {
              alert(value);
              return value;
            },
          },
        ]}
        leftButtons={[
          {
            text: "alertNumber",
            onClick: (value) => {
              if (!isNaN(Number(value))) {
                alert(value);
              }
              return value;
            },
          },
        ]}
      />
      <span>Контрол-автокомплит</span>
      <HelpControl maxhints={3} />
      <HelpControl maxhints={10} />
    </div>
  );
}

export default App;

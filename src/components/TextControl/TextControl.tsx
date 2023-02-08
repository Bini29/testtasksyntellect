import { observer } from "mobx-react";
import React, { FC, useState } from "react";
import { TextControlProps } from "../../Models/TextControlProps";
import ViewModel from "../../ViewModels/TextControlModel";
import style from "./TextControl.module.css";

const TextControl: FC<TextControlProps> = observer(
  ({ leftButtons, rightButtons }) => {
    const [viewModel] = useState(new ViewModel(rightButtons, leftButtons));

    return (
      <div className={style.inputarea}>
        {viewModel.rightButtons?.map((btn, index) => (
          <button
            key={index}
            onClick={() => viewModel.setCustomValue(btn.onClick)}
          >
            {btn.text}
          </button>
        ))}
        <input
          className={style.input}
          type="text"
          value={viewModel.inputValue}
          onChange={(e) => {
            viewModel.setInputValue(e.target.value);
          }}
        />
        {viewModel.leftButtons?.map((btn, index) => (
          <button
            key={index}
            onClick={() => viewModel.setCustomValue(btn.onClick)}
          >
            {btn.text}
          </button>
        ))}
      </div>
    );
  }
);

export default TextControl;

import { observer } from "mobx-react";
import React, { FC, useState } from "react";
import HelpControlModel from "../../ViewModels/HelpControlModel";
import style from "./HelpControl.module.css";

interface HelpControlProps {
  maxhints: number;
}

const HelpControl: FC<HelpControlProps> = observer(({ maxhints }) => {
  const [viewModel] = useState(new HelpControlModel(maxhints));
  console.log(viewModel.searchOpen);

  return (
    <div className={style.inputarea}>
      <input
        type="text"
        value={viewModel.inputValue}
        onChange={(e) => viewModel.setValue(e.target.value)}
      />
      {viewModel.searchOpen ? (
        !viewModel.isLoading ? (
          <ul className={style.searchList}>
            {viewModel.searchResults.map((i, index) => (
              <li key={index} onClick={() => viewModel.setInputValue(i.name)}>
                <span>{i.name}</span>
                <span>{i.fullName}</span> <img src={i.flag} alt={i.name} />
              </li>
            ))}
            {!viewModel.searchResults.length ? "Ничего не найдено" : null}
          </ul>
        ) : (
          <p>Загрузка</p>
        )
      ) : null}
    </div>
  );
});

export default HelpControl;

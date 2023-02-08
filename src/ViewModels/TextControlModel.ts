import { makeAutoObservable } from "mobx";
import { ButtonProps } from "../Models/TextControlProps";

class TextControlModel {
  inputValue: string = "";
  leftButtons?: ButtonProps[];
  rightButtons?: ButtonProps[];

  constructor(leftButtons?: ButtonProps[], rightButtons?: ButtonProps[]) {
    this.leftButtons = leftButtons;
    this.rightButtons = rightButtons;
    makeAutoObservable(this);
  }

  setInputValue(value: string) {
    this.inputValue = value;
  }

  setCustomValue(f: (arg: string) => string) {
    this.inputValue = f(this.inputValue);
  }
}

export default TextControlModel;

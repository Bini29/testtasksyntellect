export interface ButtonProps {
  text: string;
  onClick: (arg: string) => string;
}

export interface TextControlProps {
  leftButtons?: ButtonProps[];
  rightButtons?: ButtonProps[];
}

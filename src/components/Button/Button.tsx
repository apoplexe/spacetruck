import React from "react";
import styles from "./Button.css";
import classnames from "classnames";

type ButtonKind = "primary" | "secondary";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 
   * @default 'primary'
  */
  kind?: ButtonKind;
}

const Button = React.memo((props: Props) => {
  const { kind = "primary", ...childs } = props;

  return (
    <button
      className={classnames(
        styles.button,
        {
          [styles.buttonSecondary]: kind === "secondary"
        }
      )}
      {...childs}
    />
  );
});

export default Button;

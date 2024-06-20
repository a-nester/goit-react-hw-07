import css from "./Button.module.css";

export const Button = ({ children }) => {
  return (
    <button type="submit" className={css.button}>
      {children}
    </button>
  );
};

export default Button;

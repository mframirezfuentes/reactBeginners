import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

function Button({ onClick, children, color = "primary" }: Props) {
  return (
    <div>
      <button
        className={[styles.btn, styles["btn-" + color]].join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;

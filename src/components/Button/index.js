import "./index.css";

export const Button = ({ children, onClick, variant, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`button-container ${
        variant === "outline" ? "outline" : "main"
      }`}
    >
      {icon && (
        <img src={`/img/${icon}.png`} alt="icon" className="button-icon" />
      )}
      {children}
    </button>
  );
};

import "./index.css";

export const Input = ({ label, placeholder, value, onChange, type }) => {
  return (
    <div className="input-container">
      <span className="input-label">{label}</span>
      <input
        onChange={onChange}
        className="input"
        placeholder={placeholder}
        value={value}
        type="type || text"
      />
    </div>
  );
};

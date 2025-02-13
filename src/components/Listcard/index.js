import "./index.css";

export const ListCard = ({ item, onCheckItem }) => {
  return (
    <div className="list-card-container">
      <img
        className="checkbox-container"
        src={`/images/${item?.checked ? "checked.svg" : "unchecked.svg"}`}
        alt={item?.checked ? "checked-item" : "unchecked-item"}
        onClick={() => onCheckItem(item.id)}
      />
      <span className="list-card-title">{item.name}</span>
      <span className="list-card-subtitle">{item.quantity}units</span>
    </div>
  );
};

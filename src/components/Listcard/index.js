import "./index.css";

export const ListCard = ({ item, onCheckItem }) => {
  return (
    <div className="list-card-container">
      <img
        className="checkbox-container"
        src={`/images/${item?.checked ? "checked.svg" : "unchecked.svg"}`}
        alt="checked-item"
        onClick={() => onCheckItem(item.id)}
      />
      <span>{item.title}</span>
    </div>
  );
};

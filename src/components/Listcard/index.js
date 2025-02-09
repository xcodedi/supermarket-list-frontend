import "./index.css";

export const ListCard = ({ item = { title: "Default Title" } }) => {
  console.log(item);
  return (
    <div className="list-card-container">
      <span>{item.title}</span>
    </div>
  );
};

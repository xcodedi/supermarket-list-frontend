import "./index.css";
import { ListCard } from "../Listcard";

export const ListRender = ({ listItems, onEditItem }) => {
  return listItems.length > 0 ? (
    <ul className="list-render-container">
      {listItems.map((item, index) => (
        <li key={index}>
          <ListCard oneClick={onEditItem} item={item} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No items found.</p>
  );
};

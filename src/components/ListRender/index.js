import { ListCard } from "../Listcard";

export const ListRender = ({ listItems }) => {
  return listItems.length > 0 ? (
    <ul>
      {listItems.map((item, index) => (
        <li key={index}>
          <ListCard item={item} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No items found.</p>
  );
};

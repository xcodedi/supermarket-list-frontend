import "./index.css";
import { useEffect, useState } from "react";
import { getList } from "../../services/request/index";
import { ListCard } from "../../components";

export const ListScreen = () => {
  const [loading, setLoading] = useState(true);
  const [listItems, setListItems] = useState([]);

  const loadListItems = async () => {
    setLoading(true);
    const result = await getList();
    console.log(result);
    setListItems(result);
    setLoading(false);
  };

  useEffect(() => {
    loadListItems();
  }, []);

  return (
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-header">
          <img
            src="/img/logo-supermarket.JPG"
            className="logo-image"
            alt="logo-supermarket"
          />
          <h1>Supermarket list</h1>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>
                <ListCard item={item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

import "./index.css";
import { useEffect, useState } from "react";
import { getList, updateItem } from "../../services/request/index";
import { ListRender } from "../../components/ListRender";
import { Loader } from "../../components/Loader";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";

export const ListScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [listItems, setListItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

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

  const onClickAddButton = () => {
    setSelectedItem(null);
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
    loadListItems();
    setSelectedItem(null);
  };

  const onEditItem = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const onCheckItem = async (item) => {
    const result = await updateItem(item._id, {
      ...item,
      checked: !item.checked,
    });

    if (!result?.error) {
      await loadListItems();
    }
  };

  return (
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-header">
          <div className="list-screen-title-container">
            <img
              className="logo-image"
              src="/img/logo-supermarket.JPG"
              alt="supermarket-list-logo"
            />
            <h1 className="list-screen-header-title">Supermarket List</h1>
          </div>
          <div className="list-screen-header-button-container">
            <Button onClick={onClickAddButton}>
              {window.innerWidth <= 420 ? "+" : "Add"}
            </Button>
          </div>
        </div>
        <div className="list-screen-list-container">
          {loading ? (
            <Loader />
          ) : (
            <ListRender
              onCheckItem={onCheckItem}
              onEdit={onEditItem}
              list={listItems}
            />
          )}
        </div>
      </div>

      {showModal && <Modal item={selectedItem} onClose={onCloseModal} />}
    </div>
  );
};

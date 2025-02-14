import "./index.css";
import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import {
  createItem,
  updateItem,
  deleteItem,
} from "../../services/request/index";

export const Modal = ({ onClose, item }) => {
  const [name, setName] = useState(item ? item.name : "");
  const [quantity, setQuantity] = useState(item ? item.quantity : "");

  const onAddItem = async () => {
    if (name.length < 3) {
      alert("Name must be at least 3 characters long");
      return;
    }
    if (quantity < 1) {
      alert("Quantity must be at least 1");
      return;
    }

    const result = await createItem({ name, quantity: Number(quantity) });
    if (!result?.error) {
      alert("Item created successfully");
      onClose();
    }
  };

  const onDeleteItem = async () => {
    const result = await deleteItem(item.id);
    if (!result?.error) {
      alert("Item deleted successfully");
      onClose();
    }
  };

  const onUpdateItem = async () => {
    if (name.length < 3) {
      alert("Name must be at least 3 characters long");
      return;
    }
    if (quantity < 1) {
      alert("Quantity must be at least 1");
      return;
    }

    const result = await updateItem(
      { name, quantity: Number(quantity) },
      item.id
    );
    if (!result?.error) {
      alert("Item updated successfully");
      onClose();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1>{item ? "Edit item" : "Add new item"}</h1>
          <button onClick={onClose} className="modal-close-button">
            X
          </button>
        </div>

        <Input
          onChange={(event) => setName(event.target.value)}
          value={name}
          label="Name"
          placeholder="EX: RICE"
        />

        <Input
          onChange={(event) => setQuantity(event.target.value)}
          value={quantity}
          label="Quantity"
          type="number"
        />

        <div className="buttons-container">
          {item && (
            <Button icon="trash" variant="outline" onClick={onDeleteItem}>
              Delete item
            </Button>
          )}
          <Button onClick={item ? onUpdateItem : onAddItem}>
            {item ? "Save" : "Add"}
          </Button>
        </div>
      </div>
    </div>
  );
};

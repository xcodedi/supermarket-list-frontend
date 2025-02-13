import "./index.css";
import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";

export const Modal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1>Add new item</h1>
          <button onClick={onClose} className="modal-close-button">
            X
          </button>
        </div>

        <Input
          onChange={(text) => setName(text)}
          value={name}
          label="Name"
          placeholder="EX: RICE"
        />

        <Input
          onChange={(text) => setQuantity(text)}
          value={quantity}
          label="Quantity"
          type="number"
        />

        <div className="modal-space">
          <Button>Add</Button>
        </div>
      </div>
    </div>
  );
};

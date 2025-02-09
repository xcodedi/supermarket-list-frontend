import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { Button, Input } from "../../components";
import { SAVE_USERNAME_PATH } from "../../services/constants";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const onClickContinue = () => {
    console.log("button clicked");
    if (username.length < 3) {
      alert("Username must be at least 3 characters long");
      return;
    }
    localStorage.setItem(SAVE_USERNAME_PATH, username);
    navigate("/list");
  };

  return (
    <div className="home-screen-container">
      <div className="home-screen-content-container">
        <img
          className="shopping-bag-image"
          src="/img/supermarket.jpg"
          alt="supermarket"
        />
        <h1 style={{ fontSize: "24px" }}>Manage your grocery list easily</h1>
        <h3>Organize your purchases with a simple and clear layout</h3>
        <h3 style={{ marginTop: "5px" }}>Enter your Username below:</h3>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          label="Username:"
          placeholder="EX: user1"
        />
        <div className="home-screen-form-container">
          <Button onClick={onClickContinue}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

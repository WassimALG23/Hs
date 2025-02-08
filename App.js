import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const App = () => {
  const [birthday, setBirthday] = useState("");
  const [showButtons, setShowButtons] = useState(false);
  const [hint, setHint] = useState("");
  const navigate = useNavigate();

  const handleBirthdaySubmit = () => {
    if (birthday === "2000-08-07") {
      setShowButtons(true);
      setHint("");
    } else {
      setHint("Hint: August 7 is special! 🧐");
    }
  };

  const handleNoClick = (e) => {
    const button = e.target;
    button.style.position = "absolute";
    button.style.top = `${Math.random() * 80}vh`;
    button.style.left = `${Math.random() * 80}vw`;

    new Audio("/nuh-uh.mp3").play();
  };

  const handleYesClick = () => {
    new Audio("/yay.mp3").play();
    navigate("/reasons");
  };

  return (
    <div className="birthday-container">
      <img src="/heart.png" alt="Heart" className="heart-image" />
      <h1>Enter Your Birthday ❤️</h1>
      <input
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
      />
      <button onClick={handleBirthdaySubmit}>Submit</button>
      {hint && <p className="hint">{hint}</p>}
      {showButtons && (
        <div className="buttons-container">
          <h2>Wanna know why you're my favorite girl?</h2>
          <button onClick={handleYesClick} className="yes-btn">Yes</button>
          <button onClick={handleNoClick} className="no-btn">No</button>
        </div>
      )}
      <audio src="/bg-music.mp3" autoPlay loop />
    </div>
  );
};

export default App;

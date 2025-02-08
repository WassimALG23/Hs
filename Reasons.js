import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const reasonsList = Array.from({ length: 200 }, (_, i) => `Reason ${i + 1}: You're amazing ❤️`);

const Reasons = () => {
  const [revealed, setRevealed] = useState(new Array(200).fill(false));
  const navigate = useNavigate();

  const revealReason = (index) => {
    const newRevealed = [...revealed];
    newRevealed[index] = true;
    setRevealed(newRevealed);

    if (newRevealed.every((r) => r)) {
      setTimeout(() => navigate("/final"), 2000);
    }
  };

  return (
    <div className="reasons-container">
      <h1>200 Reasons Why You're the Best</h1>
      <div className="reasons-grid">
        {reasonsList.map((reason, index) => (
          <div
            key={index}
            className={`reason ${revealed[index] ? "revealed" : ""}`}
            onClick={() => revealReason(index)}
          >
            {revealed[index] ? reason : "Tap to reveal ❤️"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reasons;

import React, { useState } from 'react';
import './Counter.css';

const Counter = (props) => {
  const [clicks, setClicks] = useState(0);
  const [message, setMessage] = useState(props.title);

  return (
    <div className="counter-container">
      <h3>{props.title}</h3>
      <p>Click Count: {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>Click Me!</button>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>{message}</p>
    </div>
  );
};

export default Counter;

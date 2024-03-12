"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  const [count, setCount] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  function handleIncreaseCount() {
    setCount(count + 1);
  }

  function handleClearCount() {
    setCount(0);
  }

  function handleDecreaseCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Like ({likes})</button>
      <br />
      <br />
      {count}
      <br />
      <button onClick={handleIncreaseCount}>Increase</button>
      <button onClick={handleClearCount}>Clear</button>
      <button onClick={handleDecreaseCount}>Decrease</button>
    </div>
  );
}

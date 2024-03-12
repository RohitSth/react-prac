"use client";

import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  const [count, setCount] = useState(0);

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
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

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

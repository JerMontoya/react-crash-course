import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";
import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add To Do Item</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finish Frontend Simplified" />
        <Todo title="Finish Interview Section" />
        <Todo title="Land $100K Job" />
      </div>
      {showModal && <Modal title="Are ya sure??" />}
    </>
  );
}

export default App;

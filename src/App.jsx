import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";
import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
  }

  function cancelCloseModal() {
    setShowModal(false);
  }

  function confirmCloseModal() {
    setShowModal(false);
  }

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
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
        <Todo onTodoDelete={onTodoDelete} title="Land $100K Job" />
      </div>
      {showModal && (
        <Modal
          confirmCloseModal={confirmCloseModal}
          cancelCloseModal={cancelCloseModal}
          title="Are ya sure??"
        />
      )}
    </>
  );
}

export default App;

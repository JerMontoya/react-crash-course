import "./Todo.css";

function Todo({ title }) {
  function deleteTodo() {
    console.log("deleteTodo()");
  }
  return (
    <div className="todo">
      <p>{title}</p>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}

export default Todo;

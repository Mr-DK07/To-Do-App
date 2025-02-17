import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  let [todos, setTodos] = useState([{ task: "Sample task", id: uuidv4(), isDone: false }]);
  let [newToDo, setNewToDo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newToDo, id: uuidv4(), isDone: false }];
    });
  };

  let updateTask = (e) => {
    setNewToDo(e.target.value);
  };

  let deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: true};
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="App">
      <h2>To - Do App</h2>
      <input type="text" placeholder="add a task" value={newToDo} onChange={updateTask}/>
      <button onClick={addNewTask}>Add</button>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={todo.isDone ? { textDecoration: "line-through", backgroundColor: "green",
                borderRadius: "5px", padding: "1px 10px" } : {}}>{todo.task}
              </span>
              <div className="buttons">
              <button onClick={() => {deleteTask(todo.id)}}>Delete</button>
              <button onClick={() => {markAsDone(todo.id)}}>Done</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import PropTypes from "prop-types";
// import "./App.css";

// // TodoItem Component
// function TodoItem({ todo, onDelete, onToggle }) {
//   return (
//     <li>
//       <input
//         type="checkbox"
//         checked={todo.completed}
//         onChange={() => onToggle(todo.id)}
//       />
//       {todo.completed ? <del>{todo.text}</del> : todo.text}
//       <button onClick={() => onDelete(todo.id)}>Delete</button>
//     </li>
//   );
// }

// // TodoForm Component

// function TodoForm({ onAdd }) {
//   const [inputText, setInputText] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputText.trim()) {
//       onAdd(inputText);
//       setInputText("");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//         placeholder="Add a new todo..."
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

// TodoForm.propTypes = {
//   onAdd: PropTypes.func.isRequired,
// };

// // Main App Component
// function App() {
//   const [todos, setTodos] = useState([]);

//   // Add new todo
//   const addTodo = (text) => {
//     const newTodo = {
//       id: Date.now(),
//       text,
//       completed: false,
//     };
//     setTodos((prevTodos) => [...prevTodos, newTodo]);
//   };

//   // Toggle todo completion status
//   const toggleTodo = (id) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   // Delete a todo
//   const deleteTodo = (id) => {
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div className="App">
//       <h1>Todo App</h1>
//       <TodoForm onAdd={addTodo} />
//       <ul>
//         {todos.map((todo) => (
//           <TodoItem
//             key={todo.id}
//             todo={todo}
//             onDelete={deleteTodo}
//             onToggle={toggleTodo}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// TodoItem.propTypes = {
//   todo: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     text: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired,
//   }).isRequired,
//   onDelete: PropTypes.func.isRequired,
//   onToggle: PropTypes.func.isRequired,
// };
// TodoForm.propTypes = {
//   onAdd: PropTypes.func.isRequired,
// };
// export default App;

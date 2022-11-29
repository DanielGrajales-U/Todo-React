import "./Todos.css";
import useTodo from "../../Hoocks/useTodo";

export default function Todos() {
  const {todosI,todosC,handleToggle,handleRemove} = useTodo();
  
  return (
    <div className="todos">
      <h2>Incompleted</h2>
      {todosI.map((todo) => (
        <div key={todo.id} className="todo incomplete-task">
          <input type="checkbox" id="hecho" onClick={()=>handleToggle(todo.id)}/>
          <label onClick={()=>handleToggle(todo.id)}>{todo.activity}</label>

          <div className="delete">
                <span onClick={()=>handleRemove(todo.id)}>Delete</span>
          </div>
        </div>
      ))}
      <h2>Completed</h2>
      {todosC.map((todo) => (
        <div key={todo.id} className="todo complete-task">
          <input type="checkbox" id="hecho" onClick={()=>handleToggle(todo.id)}/>
          <label onClick={()=>handleToggle(todo.id)}>{todo.activity}</label>

          <div className="delete">
                <span onClick={()=> handleRemove(todo.id)}>Delete</span>
          </div>
        </div>
      ))}
    </div>
  );
}

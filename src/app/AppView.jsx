import style from "../App.module.css";
import plus from "../../img/plus.png";
import {Task} from "../component/Task";

export const App = (props) => {

  const ChangeText = (e) => {
    props.changeTask(e.target.value)
  }

  return (<div className={style.app}>
    <div className={style.input_group}>
      ToDoList
      <div>
        <input type="text" placeholder='Enter task' className={style.input} onChange={event => ChangeText(event)} value={props.state.newTaskText}/>
      </div>
      <input type='image' src={plus} alt="" className={style.button} onClick={() => props.addTask()}/>
    </div>
    <div>
      {props.state.tasks
        .sort((a, b) => a.id - b.id)
        .map(task =>
          <Task
            key={task.id}
            task={task}
            deleteTask={props.deleteTask}
            editTask={props.editTask}
            text={props.state.newTaskText}/>)}
    </div>
  </div>)
}
import style from "../App.module.css";
import garbage from "../../img/garbage.png";
import pen from "../../img/pen.png";

export const Task = ({task, deleteTask, editTask, text}) => {
  return <div className={style.task}>
    <div className={style.text}>{task.text}</div>
    <div>
      <input type='image' src={garbage} className={style.button} alt="" onClick={() => deleteTask(task.id)}/>
      <input type='image' src={pen} className={style.button} alt="" onClick={() => editTask(task.id, text)}/>
    </div>
  </div>
}

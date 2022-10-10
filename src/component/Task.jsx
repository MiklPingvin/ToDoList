import style from "../App.module.css";
import garbage from "../img/garbage.png";
import pen from "../img/pen.png";
import save from "../img/save.webp"
import out from "../img/out.png"
import {useState} from "react";

export const Task = ({task, deleteTask, editTask, text}) => {
  const [EditMode,setEditMode] = useState(false)
    const [TaskText,setTaskText] = useState(task.text)
  return !EditMode?
  <div className={style.task}>
      <div className={style.text}>{task.text}</div>
      <div>
        <input type='image' src={garbage} className={style.button} alt="" onClick={() => deleteTask(task.id)}/>
        <input type='image' src={pen} className={style.button} alt="" onClick={() => setEditMode(true)}/>
      </div>
    </div>
      :
      <div className={style.task}>
          <input autoFocus  type="text" className={style.text} value={TaskText} onChange={event => setTaskText(event.target.value)}/>
        <div>
          <input type='image' src={out} className={style.button} alt="" onClick={() => setEditMode(false)}/>
          <input type='image' src={save} className={style.button} alt="" onClick={() => {
              editTask(task.id, TaskText)
              setEditMode(false)
          }}/>
        </div>
      </div>

}

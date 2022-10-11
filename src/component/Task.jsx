import style from "../App.module.css";
import garbage from "../img/garbage.png";
import pen from "../img/pen.png";
import save from "../img/save.webp"
import out from "../img/out.png"
import {useState} from "react";

export const Task = ({task, deleteTask, editTask, setEditOn}) => {
    const [TaskText, setTaskText] = useState(task.text)
    return !task.EditOn ?
        <div className={style.task}>
            <div className={style.text}>{task.text}</div>
            <div>
                <input type='image' src={garbage} className={style.button} alt="" onClick={() => deleteTask(task.id)}/>
                <input type='image' src={pen} className={style.button} alt="" onClick={() => setEditOn(task.id, true)}/>
            </div>
        </div>
        :
        <div className={style.task}>
            <input autoFocus type="text" className={style.text} value={TaskText}
                   onChange={event => setTaskText(event.target.value)}/>
            <div>
                <input type='image' src={out} className={style.button} alt="" onClick={() => {
                    deleteTask(task.id)
                    setEditOn(task.id, false)
                }}/>
                <input type='image' src={save} className={style.button} alt="" onClick={() => {
                    TaskText.trim() === '' ? deleteTask(task.id) : editTask(task.id, TaskText)
                    setEditOn(task.id, false)
                }}/>
            </div>
        </div>

}

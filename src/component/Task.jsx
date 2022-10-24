import style from "../App.module.css";
import garbage from "../img/garbage.png";
import pen from "../img/pen.png";
import save from "../img/save.webp"
import out from "../img/out.png"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteTask, setEditOn, setText} from "../redux/reducer";

export const Task = ({task}) => {
    const [TaskText, setTaskText] = useState(task.text);
    const dispatch = useDispatch();

    return !task.EditOn ?
        <div className={style.task}>
            <div className={style.text}>{task.text}</div>
            <div className={style.button_group}>
                <input
                  type='image'
                  src={garbage}
                  className={style.button}
                  alt=""
                  onClick={() => dispatch(deleteTask(task.id))}/>
                <input
                  type='image'
                  src={pen}
                  className={style.button}
                  alt=""
                  onClick={() => dispatch(setEditOn(task.id, true))}/>
            </div>
        </div>
        :
        <div className={style.task}>
            <input
              autoFocus
              type="text"
              className={style.text}
              value={TaskText}
              onChange={event => setTaskText(event.target.value)}/>
            <div className={style.button_group}>
                <input
                  type='image'
                  src={out}
                  className={style.button}
                  alt=""
                  onClick={() => {
                    if (task.text === '') {
                        dispatch(deleteTask(task.id))
                    }
                    setTaskText(task.text)
                    dispatch(setEditOn(task.id, false))
                }}/>
                <input
                  type='image'
                  src={save}
                  className={style.button}
                  alt=""
                  onClick={() => {
                    TaskText.trim() === ''
                      ? dispatch(deleteTask(task.id))
                      : dispatch(setText(task.id, TaskText))
                    dispatch(setEditOn(task.id, false))
                }}/>
            </div>
        </div>

}

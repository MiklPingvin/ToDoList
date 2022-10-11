import {Task} from "./Task";
import plus from "../img/plus.png";
import style from "../App.module.css";

export const Desk = ({name, id_desk, tasks, deleteTask, setText, setEditOn, addTask}) => {
    return (
        <div className={style.desk}>
            <div>{name}</div>
            <div className={style.desk_content}>
                <div>
                    {tasks
                        .filter(task => task.desk_id === id_desk)
                        .sort((a, b) => a.id - b.id)
                        .map(task =>
                            <Task
                                key={task.id}
                                task={task}
                                deleteTask={deleteTask}
                                setText={setText}
                                setEditOn={setEditOn}/>)}
                </div>
                <input type='image' src={plus} alt="" className={style.button} onClick={() => addTask(id_desk)}
                       disabled={tasks.some(task => task.EditOn)}
                />
            </div>
        </div>
    )
}
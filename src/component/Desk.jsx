import {Task} from "./Task";
import plus from "../img/plus.png";
import style from "../App.module.css";

const Desk =({name,tasks,deleteTask,setText,setEditOn,addTask})=>{
    return(
        <div>
            <div>{name}</div>
            <div>
                <div>
                    {tasks
                        .sort((a, b) => a.id - b.id)
                        .map(task =>
                            <Task
                                key={task.id}
                                task={task}
                                deleteTask={deleteTask}
                                setText={setText}
                                setEditOn={setEditOn}/>)}
                </div>
                <input type='image' src={plus} alt="" className={style.button} onClick={() => addTask()}
                       disabled={tasks.some(task=> task.EditOn)}
                />
            </div>
        </div>
    )
}
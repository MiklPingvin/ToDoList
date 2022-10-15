import style from "../App.module.css";
import {DivDragAndDrop} from "./DivDragAndDrop";
import {Task} from "./Task";
import plus from "../img/plus.png";

export const DeskView = ({
                             name,
                             deleteTask,
                             setText,
                             setEditOn,
                             addTask,
                             setDeskId,
                             setCurrentTask,
                             setNumberOnDesk,
                             currentTask,
                             tasks,
                             desk_array,
                             id_desk
                         }) => {
    return (<div className={style.desk}>
        <div>{name}</div>
        <div className={style.desk_content}>
            <div>
                {desk_array
                    .sort((a, b) => a.number_on_desk - b.number_on_desk)
                    .map(task =>
                        <DivDragAndDrop
                            task={task}
                            setNumberOnDesk={setNumberOnDesk} setDeskId={setDeskId}
                            currentTask={currentTask} setCurrentTask={setCurrentTask} desk_array={desk_array}
                            className={style.task_group}
                        >
                            <Task
                                key={task.id}
                                task={task}
                                deleteTask={deleteTask}
                                setText={setText}
                                setEditOn={setEditOn}/>
                        </DivDragAndDrop>)}
            </div>
            <input type='image' src={plus} alt="" className={style.button} onClick={() => addTask(id_desk)}
                   disabled={tasks.some(task => task.EditOn)}
            />
        </div>
    </div>)
}
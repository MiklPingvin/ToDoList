import {Task} from "./Task";
import plus from "../img/plus.png";
import style from "../App.module.css";
import {DivDragAndDrop} from "./DivDragAndDrop";

export const Desk = ({
                         name,
                         id_desk,
                         tasks,
                         deleteTask,
                         setText,
                         setEditOn,
                         addTask,
                         setNumberOnDesk,
                         setDeskId,
                         setCurrentTask,
                         currentTask
                     }) => {
    const desk_array = tasks.filter(task => task.desk_id === id_desk)

    return (
        <div className={style.desk}>
            <div>{name}</div>
            <div className={style.desk_content}>
                <div>
                    {desk_array
                        /////.sort((a, b) => a.number_on_desk - b.number_on_desk)
                        .map(task =>
                            <DivDragAndDrop
                                task={task}
                                setNumberOnDesk={setNumberOnDesk} setDeskId={setDeskId}
                                currentTask={currentTask} setCurrentTask={setCurrentTask} desk_array={desk_array}
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
        </div>
    )
}
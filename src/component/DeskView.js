import style from "../App.module.css";
import {DivDragAndDrop} from "./DivDragAndDrop";
import {Task} from "./Task";
import plus from "../img/plus.png";
import {addTask, setCurrentTask, setDeskId, setNumberOnDesk} from "../redux/reducer";
import {useDispatch} from "react-redux";

export const DeskView = ({
  name,
  currentTask,
  tasks,
  desk_array,
  id_desk
}) => {
  const dispatch = useDispatch();

  function dragOverHandler(event) {
    event.preventDefault()
  }

  function dragLeaveHandler(event) {
    event.target.style.boxShadow = 'none'
  }

  function dragEndHandler(event) {
    event.target.style.boxShadow = 'none'
  }

  function dropHandler(event) {
    dispatch(setNumberOnDesk(currentTask.id, event.target.value.number_on_desk + 1))
    dispatch(setDeskId(currentTask.id, id_desk))
  }

  return (
    <div className={style.desk}
         onDragOver={(event) => dragOverHandler(event)}
         onDragLeave={(event) => dragLeaveHandler(event)}
         onDragEnd={(event) => dragEndHandler(event)}
         onDrop={(event) => dropHandler(event)}>
    <div>{name}</div>
    <div className={style.desk_content}>
      <div>
        {desk_array
          .sort((a, b) => a.number_on_desk - b.number_on_desk)
          .map(task =>
            <DivDragAndDrop
              task={task}
              currentTask={currentTask}
              desk_array={desk_array}
            >
              <Task
                key={task.id}
                task={task}
                />
            </DivDragAndDrop>)}
      </div>
      <input
        type='image'
        src={plus}
        alt=""
        className={style.button}
        onClick={() => dispatch(addTask(id_desk))}
        disabled={tasks.some(task => task.EditOn)}
      />
    </div>
  </div>)
}
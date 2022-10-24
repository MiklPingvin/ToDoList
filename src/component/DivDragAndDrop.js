import {useDispatch} from "react-redux";
import {setCurrentTask, setDeskId, setNumberOnDesk} from "../redux/reducer";

export const DivDragAndDrop = (props) => {
  const dispatch = useDispatch();

    function dragOverHandler(event) {
        event.preventDefault()
    }

    function dragLeaveHandler(event) {
        event.target.style.boxShadow = 'none'
    }

    function dragStartHandler(event, task) {
        dispatch(setCurrentTask(task));
    }

    function dragEndHandler(event) {
        event.target.style.boxShadow = 'none'
    }

    function dropHandler(event, task) {
        event.preventDefault()
        dispatch(setNumberOnDesk(props.currentTask.id, task.number_on_desk + 1))
        dispatch(setDeskId(props.currentTask.id, task.desk_id))
    }

    return <div draggable={true}
                onDragOver={(event) => dragOverHandler(event)}
                onDragLeave={(event) => dragLeaveHandler(event,)}
                onDragStart={(event) => dragStartHandler(event, props.task)}
                onDragEnd={(event) => dragEndHandler(event)}
                onDrop={(event) => dropHandler(event, props.task)}
                className={props.className}>
        {props.children}
    </div>
}
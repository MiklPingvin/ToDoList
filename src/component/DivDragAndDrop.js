import style from "../App.module.css";

export const DivDragAndDrop = (props) => {

    function dragOverHandler(event) {
        event.preventDefault()
        if (event.target.className === style.desk_content) {
            event.target.style.boxShadow = '0 7px 5px grey'
        }
    }

    function dragLeaveHandler(event) {
        event.target.style.boxShadow = 'none'
    }

    function dragStartHandler(event, task) {
        props.setCurrentTask(task)
    }

    function dragEndHandler(event) {
        event.target.style.boxShadow = 'none'
    }

    function dropHandler(event, task) {
        event.preventDefault()
        props.setDeskId(props.currentTaskId, task.id_desk)
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
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

    function dragStartHandler(event, task_id) {
        props.setCurrentTaskId(task_id)
        console.log(props.currentTaskId + 'Start')
    }

    function dragEndHandler(event) {
        event.target.style.boxShadow = 'none'
    }

    function dropHandler(event, id_desk, number_on_desk) {
        event.preventDefault()
        console.log(props.currentTaskId + " drop")
        props.setDeskId(props.currentTaskId, id_desk)
        props.setNumberOnDesk(props.currentTaskId, number_on_desk + 1)
    }

    return <div draggable={true}
                onDragOver={(event) => dragOverHandler(event)}
                onDragLeave={(event) => dragLeaveHandler(event,)}
                onDragStart={(event) => dragStartHandler(event, props.task_id)}
                onDragEnd={(event) => dragEndHandler(event)}
                onDrop={(event) => dropHandler(event, props.id_desk, props.number_on_desk)}
                className={props.className}>
        {props.children}
    </div>
}
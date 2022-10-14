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
        if (props.currentTask.desk_id === task.desk_id) {
            const currentIndex = props.desk_array.indexOf(props.currentTask)
            const dropIndex = props.desk_array.indexOf(task)
            props.desk_array.splice(currentIndex, 1)
            props.desk_array.splice(dropIndex + 1, 0, props.currentTask)
            debugger

        }
        props.setDeskId(props.currentTask.id, task.desk_id)
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
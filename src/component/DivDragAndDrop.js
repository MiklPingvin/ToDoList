export const DivDragAndDrop = (props) => {

    function dragOverHandler(event) {
        event.preventDefault()
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
        props.setNumberOnDesk(props.currentTask.id, task.number_on_desk + 1)
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
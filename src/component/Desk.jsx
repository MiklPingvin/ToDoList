import {DeskView} from "./DeskView";
import {connect} from "react-redux";
import {deleteTask, setText, setEditOn, addTask, setNumberOnDesk, setDeskId, setCurrentTask} from "../redux/reducer";

const Desk = (props) => {

    const desk_array = props.state.tasks.filter(task => task.desk_id === props.id_desk)

    desk_array.forEach((element) => {
        const elementIndex = desk_array.indexOf(element)
        if (elementIndex !== desk_array.length - 1) {
            const nextElement = desk_array[elementIndex + 1]
            if (element.number_on_desk === nextElement.number_on_desk) {
                if (nextElement.id === props.state.currentTask.id) {
                    props.setNumberOnDesk(element.id, nextElement.number_on_desk + 1)
                } else {
                    props.setNumberOnDesk(nextElement.id, nextElement.number_on_desk + 1)
                }
            }
        }
    })

    return (
        <DeskView name={props.name}
                  id_desk={props.id_desk}
                  tasks={props.state.tasks}
                  deleteTask={props.deleteTask}
                  setText={props.setText}
                  setEditOn={props.setEditOn}
                  addTask={props.addTask}
                  setNumberOnDesk={props.setNumberOnDesk}
                  setDeskId={props.setDeskId}
                  setCurrentTask={props.setCurrentTask}
                  currentTask={props.state.currentTask}
                  desk_array={desk_array}
        />
    )
}
const mapStateToProps = (state) => ({
    state: state.mainPage
})

export const DeskMain = connect(mapStateToProps, {
    deleteTask,
    setText,
    setEditOn,
    addTask,
    setNumberOnDesk,
    setDeskId,
    setCurrentTask
})(Desk)
import {useDispatch, useSelector} from "react-redux";
import {setNumberOnDesk} from "../redux/reducer";
import {DeskView} from "./DeskView";

export const Desk = ({desk}) => {
    const dispatch = useDispatch();
    const state = useSelector((state)=> state.mainPage)
    const {name, id_desk} = desk;
    const {tasks, currentTask} = state;

    const desk_array = tasks.filter(task => task.desk_id === id_desk)

    desk_array.forEach((element) => {
        const elementIndex = desk_array.indexOf(element)
        if (elementIndex !== desk_array.length - 1) {
            const nextElement = desk_array[elementIndex + 1]
            if (element.number_on_desk === nextElement.number_on_desk) {
                if (nextElement.id === currentTask.id) {
                    dispatch(setNumberOnDesk(element.id, nextElement.number_on_desk + 1))
                } else {
                    dispatch(setNumberOnDesk(nextElement.id, nextElement.number_on_desk + 1))
                }
            }
        }
    })

    return (
        <DeskView name={name}
                  id_desk={id_desk}
                  tasks={tasks}
                  currentTask={currentTask}
                  desk_array={desk_array}
        />
    )
}

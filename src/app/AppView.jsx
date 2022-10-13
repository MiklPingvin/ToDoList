import style from "../App.module.css";
import plus from "../img/plus.png";
import {Desk} from "../component/Desk";
import {useState} from "react";

export const App = (props) => {
    const [deskName, setDaskName] = useState('')

    return (<div className={style.app}>
        <div className={style.input_group}>
            ToDoList
            <div>
                <input type="text" placeholder='Enter desk name' className={style.input}
                       onChange={event => setDaskName(event.target.value)} value={deskName}/>
            </div>
            <input type='image' src={plus} alt="" className={style.add_desk_button} onClick={() => {
                props.addDesk(deskName)
                setDaskName('')
            }}/>
        </div>
        <div className={style.desks}>
            {props.state.desks.map(desk =>
                <Desk name={desk.name} key={desk.id_desk} id_desk={desk.id_desk} tasks={props.state.tasks}
                      currentTask={props.state.currentTask}
                      addTask={props.addTask} deleteTask={props.deleteTask} setCurrentTask={props.setCurrentTask}
                      setEditOn={props.setEditOn} setText={props.setText} setNumberOnDesk={props.setNumberOnDesk}
                      setDeskId={props.setDeskId}/>
            )}
        </div>
    </div>)
}
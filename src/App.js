import s from './App.module.css';
import store from "./Redux/redux";
import {connect, Provider} from "react-redux"
import garbage from './img/garbage.png'
import pen from './img/pen.png'
import plus from './img/plus.png'
import {addTask, changeTask, deleteTask} from "./Redux/reducer";


const Task = ({task,deleteTask}) => {
    return <div className={s.task}>
        {task.text}
        <div>
            <input type='image' src={garbage} className={s.button} alt="" onClick={() => deleteTask(task.id)}/>
            <img src={pen} className={s.button} alt=""/>
        </div>
    </div>
}



function App(props) {

    const ChangeText=(e)=>{
        props.changeTask(e.target.value)
    }

    return <Provider store={store}>
        <div className={s.app}>
            <div className={s.input_group}>
                ToDoList
                <div>
                    <input type="text" placeholder='Enter task' className={s.input} onChange={event => ChangeText(event)} value={props.state.newTaskText}/>
                </div>
                <input type='image' src={plus} alt="" className={s.button} onClick={()=>props.addTask()}/>
            </div>
            <div>{props.state.tasks.map(task => {
                return <Task task={task} deleteTask={props.deleteTask}/>
            })}</div>
        </div>
    </Provider>
}

const mapStateToProps = (state) => ({
    state: state.mainPage
})

let AppContainer = connect(mapStateToProps, {addTask,changeTask,deleteTask})(App)
const MainApp = () => {
    return <Provider store={store}>
        <AppContainer/>
    </Provider>
}

export default MainApp;

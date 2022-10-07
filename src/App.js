import style from './App.module.css';
import store from "./redux/redux";
import {connect, Provider} from "react-redux"
import garbage from './img/garbage.png'
import pen from './img/pen.png'
import plus from './img/plus.png'
import {addTask, changeTask, deleteTask, editTask} from "./redux/reducer";


const Task = ({task, deleteTask, editTask, text}) => {
    return <div className={style.task}>
        <div className={style.text}>{task.text}</div>
        <div>
            <input type='image' src={garbage} className={style.button} alt="" onClick={() => deleteTask(task.id)}/>
            <input type='image' src={pen} className={style.button} alt="" onClick={() => editTask(task.id, text)}/>
        </div>
    </div>
}



function App(props) {

    const ChangeText=(e)=>{
        props.changeTask(e.target.value)
    }

    return (<div className={style.app}>
            <div className={style.input_group}>
                ToDoList
                <div>
                    <input type="text" placeholder='Enter task' className={style.input} onChange={event => ChangeText(event)} value={props.state.newTaskText}/>
                </div>
                <input type='image' src={plus} alt="" className={style.button} onClick={()=>props.addTask()}/>
            </div>
            <div>{props.state.tasks.sort((a,b)=> a.id - b.id).map(task => {
                return <Task key={task.id} task={task} deleteTask={props.deleteTask} editTask={props.editTask} text={props.state.newTaskText}/>
            })}</div>
        </div>)
}

const mapStateToProps = (state) => ({
    state: state.mainPage
})

let AppContainer = connect(mapStateToProps, {addTask,changeTask,deleteTask,editTask})(App)
const MainApp = () => {
    return <Provider store={store}>
        <AppContainer/>
    </Provider>
}

export default MainApp;

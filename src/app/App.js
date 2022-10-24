import store from "../redux/redux";
import {connect, Provider} from "react-redux"
import {
    addDesk,
    addTask,
    deleteTask,
    setCurrentTaskId,
    setDeskId,
    setEditOn,
    setNumberOnDesk,
    setText
} from "../redux/reducer";
import {AppView} from "./AppView";

const mapStateToProps = (state) => ({
    state: state.mainPage
})

let AppContainer = connect(mapStateToProps, {addTask, setEditOn, deleteTask, setText, addDesk,setNumberOnDesk,setDeskId})(AppView)

const App = () => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>)
}

export default App;

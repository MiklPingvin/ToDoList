import store from "../redux/redux";
import {connect, Provider} from "react-redux"
import {addTask, deleteTask, editTask, setEditOn} from "../redux/reducer";
import {App} from "./AppView";

const mapStateToProps = (state) => ({
  state: state.mainPage
})

let AppContainer = connect(mapStateToProps, {addTask,setEditOn, deleteTask, editTask})(App)

const MainApp = () => {
  return (
    <Provider store={store}>
    <AppContainer/>
  </Provider>)
}

export default MainApp;

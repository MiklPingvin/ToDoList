import store from "../redux/redux";
import {connect, Provider} from "react-redux"
import {addDesk} from "../redux/reducer";
import {App} from "./AppView";

const mapStateToProps = (state) => ({
    state: state.mainPage
})

let AppContainer = connect(mapStateToProps, {addDesk})(App)

const MainApp = () => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>)
}

export default MainApp;

import style from "../App.module.css";
import plus from "../img/plus.png";
import {Desk} from "../component/Desk";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addDesk} from "../redux/reducer";

export const AppView = (props) => {
  const [deskName, setDaskName] = useState('');
  const dispatch = useDispatch();
  return (
    <div className={style.app}>
      <div className={style.input_group}>
        <a>
          ToDoList
        </a>
        <input
          type="text"
          placeholder='Enter desk name'
          className={style.input}
          onChange={event => setDaskName(event.target.value)}
          value={deskName}/>
        <input
          type='image'
          src={plus}
          alt=""
          className={style.add_desk_button}
          onClick={() => {
            dispatch(addDesk(deskName));
            setDaskName('');
          }}/>
      </div>
      <div className={style.desks}>
        {props.state.desks.map(desk =>
          <Desk
            key={desk.id_desk}
            desk={desk}
          />
        )}
      </div>
    </div>)
}
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom'

function DialogItem(props){
    return(
        <div className={s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;
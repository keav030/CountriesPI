import { useDispatch, useSelector} from "react-redux";
import { setPage, filterByActivity } from "../../redux/actions"
import style from "./Selector.module.css"

const ActivitySelector = () => {

    const dispatch = useDispatch()

    const activities = useSelector(state=>state.activities)

    const activitiesSelectorHandler = (event) =>{
        const value = event.target.value
        dispatch(filterByActivity(value))
        dispatch(setPage(1))
    }

    return(
        <select className={style.select} onChange={activitiesSelectorHandler}>
            <option option="true" hidden>Actividades</option>
            <option value="All">Cualquier</option>
            {activities && activities.map( (a, i) => (
                <option key={i}>{a.name}</option>
            ))}
        </select>
    )
}

export default ActivitySelector


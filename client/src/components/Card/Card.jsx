import { Link } from "react-router-dom"
import style from "./Card.module.css"
import { useDispatch } from "react-redux";
import { getCountry } from "../../redux/actions";

const Card = (props) => {

    const dispatch = useDispatch()
    const goToDetail = () => {
        dispatch(getCountry(props.id))
    }

    return(
        <div className={style.card}>      
            <img src={props.flag} alt="country flag" height="100" width="178" />

            <p className={style.title}>{props.name}</p>
            <p>Continente: {props.continent}</p>
            
            <Link className={style.goDetail} onClick={goToDetail} to="/detail">Ver mas...</Link>
        </div>
    )
}

export default Card
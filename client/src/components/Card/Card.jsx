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
            <img src={props.flag} alt="country flag" height="100" />

            <p>{props.name}</p>
            <p>{props.continent}</p>
            
            <Link onClick={goToDetail} to="/detail">Detalle</Link>
        </div>
    )
}

export default Card
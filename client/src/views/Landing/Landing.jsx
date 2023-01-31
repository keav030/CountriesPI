import { Link } from "react-router-dom"
import style from "./Landing.module.css"

const Landing = () => {
    return(
        <div className={style.mainLanding}>
            <div className={style.landingItems}>
                <h1 className={style.landingTittle}>PI Countries</h1>
                <Link to="/home">
                    <button className={style.landingButton}>Home</button>
                </Link>
            </div>
            
        </div>
    )
}

export default Landing;
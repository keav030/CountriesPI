import Card from "../Card/Card"
import style from "./CardsContainer.module.css"


const CardsContainer = (props) => {
    return(
        <div className={style.container}>
            {props.countries.map(country => {
                return <Card key={country.id}
                    name={country.name}
                    flag={country.flag}
                    continent={country.continent}
                    id={country.id}
                />
                })
            }
        </div>
    )
}

export default CardsContainer


    
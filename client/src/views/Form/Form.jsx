import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { getCountries, orderByProp } from "../../redux/actions"

const Form = () => {


    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])

    dispatch(orderByProp("asc","name"))
    const countries = useSelector(state=>state.countries)

    const [form,setForm] = useState({
        name:"",
        dificulty : "",
        duration: "",
        season: "",
        countryId: []
    })
    
    const [errors, setErrors] = useState({
        name:"",
        dificulty : "",
        duration: "",
        season: "",
        countryId: [""]
    })

    const changeHandler = (event) => {
        const property = event.target.name
        const value = event.target.value
        
        validate({...form, [property]:value})
        setForm({...form, [property]:value})
    }


    const changeCountriesHandler = (event) => {
        //setCountriesId(oldArray => [...oldArray,event.target.value])
        setForm({...form, countryId: [...form.countryId, event.target.value]})
    }

    const validate = (form) => {
        if(/^[A-Za-z\s]*$/.test(form.name)){
            setErrors({...errors, name:""})
        }else{
            setErrors({...errors, name:"No se permite caracteres especiales"})
        }
        if(form.name === "") setErrors({...errors, name:"Name vacio"})
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log("form en submit: ", form)

        axios.post("http://localhost:3001/activities", form)
            .then(res => alert(res))
    }

    


    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Nombre</label>
                <input type="text" value={form.name} onChange={changeHandler} name="name" />
                <span>{errors.name}</span>
            </div>
            <div>
                <label>Dificultad</label>
                <select onChange={changeHandler} name="dificulty">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <label>Duracion</label>
                <input type="text" value={form.duration} onChange={changeHandler} name="duration"/>
            </div>
            <div>
                <label>Temporada</label>
                <select onChange={changeHandler} name="season">
                    <option value="Primavera">Primavera</option>
                    <option value="Verano">Verano</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Invierno">Invierno</option>
                    
                </select>
            </div>
            <div>
                <label>Paises</label>
                <select onChange={changeCountriesHandler} name="countryId">
                    {countries && countries.map( (country, index) =>
                        <option key={index} value={country.id}>{country.name}</option>
                    
                    )}
                </select>
                {form.countryId && form.countryId.map((e, index) => <span key={index}>{e} - </span>)}
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form;
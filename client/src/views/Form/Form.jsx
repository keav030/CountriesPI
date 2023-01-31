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
        countryId: ""
    })

    const [submitValidate, setSubmitValidate] = useState(true)


    //===================Funcion detectora de cambios===================//
    //=================================================================//
    const changeHandler = (event) => {
        const property = event.target.name
        const value = event.target.value

        validate({...form, [property]:value},property)
        setForm({...form, [property]:value})

        
    }

    //===================Validador de numero de errors===================//
    //==================================================================//
    const errorsValidator = (errors) => {
        let errosNumber = 0
        for (const property in errors) {
            if(!(errors[property]===""))errosNumber++
        }
        if(errosNumber===0) {
            setSubmitValidate(false)
        }else{
            setSubmitValidate(true)
        }
    }


    //===================Validador de input===================//
    //========================================================//
    const validate = (form, property) => {
        if(property === "name") {
            let response = ""
            if(!( /^[A-Za-z\s]*$/.test(form.name) )) response="Solamente puedes poner caracteres Alfabeticos"
            if(form.name === "") response="Nombre vacio" 

            setErrors({...errors, name:response}) 
            errorsValidator({...errors, name:response})
        }
            
        if(property === "duration"){
            let response = ""
            if(!( form.duration > 0 && /^[0-9]*$/.test(form.duration) )) response="Solamente puedes poner caracteres numericos"
            if(form.duration === "") response="Ingrese duracion"

            setErrors({...errors, duration:response}) 
            errorsValidator({...errors, duration:response}) 
        }  
        
        if(property === "countryId"){
            let response = ""
            if(form.countryId.length=== 0) response="Seleccione minimo un pais"
            setErrors({...errors, countryId:response}) 
            errorsValidator({...errors, countryId:response}) 
        }
        
    }


    //===================Funcion para Realizar el Submint===================//
    //=====================================================================//
    const submitHandler = (event) => {
        event.preventDefault()
        console.log("form en submit: ", form)

        axios.post("http://localhost:3001/activities", form)
            .then(res => alert(res))
            .catch(err=>console.log(err))
    }


    //===================Funcion para añadir paises===================//
    //===============================================================//
    const changeCountriesHandler = (event) => {
        if(!form.countryId.includes(event.target.value)){
            validate({...form, countryId: [...form.countryId, event.target.value]}, event.target.name)
            setForm({...form, countryId: [...form.countryId, event.target.value]})
        }
        
    }

    //===================Funcion para remover paises===================//
    //================================================================//
    const countryButtonHandler = (event) => {
        let deleteArray = form.countryId.filter(element => element !== event.target.value)
        validate({...form, countryId: deleteArray},event.target.name )
        setForm({...form, countryId: deleteArray})
    }
    

    return(
        <div>
            <Link to="/home">Home</Link>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Nombre</label>
                    <input type="text" value={form.name} onChange={changeHandler} name="name" />
                    <span>{errors.name}</span>
                </div>
                <div>
                    <label>Dificultad</label>
                    <select onChange={changeHandler} name="dificulty">
                        <option option="true" hidden>--Seleciona Dificultad--</option>
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
                    <span>{errors.duration}</span>
                </div>
                <div>
                    <label>Temporada</label>
                    <select onChange={changeHandler} name="season">
                        <option option="true" hidden>--Seleciona Estacion--</option>
                        <option value="Primavera">Primavera</option>
                        <option value="Verano">Verano</option>
                        <option value="Otoño">Otoño</option>
                        <option value="Invierno">Invierno</option>
                        
                    </select>
                </div>
                <div>
                    <label>Paises</label>
                    <select onChange={changeCountriesHandler} name="countryId">
                        <option option="true" default hidden>--Seleciona Un Pais--</option>
                        {countries && countries.map( (country, index) =>
                            <option key={index} value={country.id}>{country.name}</option>
                        
                        )}
                    </select>
                    {form.countryId && form.countryId.map((e, index) => (
                        <div key={index}>
                            <span key={index}>{e}</span>
                            <button value={e} type="button" onClick={countryButtonHandler} key={`${index}b`} name="countryId">X</button>
                        </div>
                    ))}
                </div>
                <button disabled={submitValidate} type="submit">Enviar</button>
            </form>
        </div>    
    )
}

export default Form;

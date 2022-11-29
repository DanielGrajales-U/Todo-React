import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useLocation } from "wouter"
import useTodo from "../../Hoocks/useTodo"
import useUser from "../../Hoocks/useUser"
import './Add.css'

export  default function AddForm(){
    const { handleAdd } = useTodo()
    const [acti,setActi] = useState('')
    const [ path,pushLocation] = useLocation('')
    


    const handleSubmit = async  evt =>{
        evt.preventDefault()
        //Validation data
        if(acti === ''){
            alert('Debes de ingresar un valor')
        }
        else if(acti.length > 20){
            alert ('Resume tu actividad en 20 letras')
            
        }
        else{
            const idUser = JSON.parse(localStorage.getItem('user')).id
            handleAdd(acti,idUser)
            pushLocation('/home')
        }
        
    }
    const handleChange = evt =>{
        setActi(evt.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
               <div className="inputBox">
                <input type='text' className="input" onChange={handleChange}/>
                <span>Activity</span>
               </div>
                <button>Add</button>
            </form>
        </>
    )
}
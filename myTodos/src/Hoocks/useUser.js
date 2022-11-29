import { useState,useEffect, useContext } from 'react'
import userService from '../services/GetUsers'

import { useLocation } from "wouter"
import axios from 'axios'
import UserContext from '../Context/UserContext'

const baseURL = 'http://localhost:3002/User/login'

export default function useUser(){
 
    const [,pushLocation] = useLocation()
    const { jwt, setJwt } = useContext(UserContext)


    const handleLogin = (body)=>{
        try{
            axios.post(baseURL, body)
            .then(res => {
                const user = JSON.stringify(res.data)
                localStorage.setItem('user',user)
                localStorage.setItem('auth','yes')
                const userLoged = res.data
                setJwt(userLoged)

                pushLocation('/home')
            })
            .catch(response=>{
                console.log(response)
            })
                


        }catch(err){
            console.log()
        }

    } 

    
    const handleAdd = (user,email,pass)=>{
        const newUser = JSON.stringify({user:user, email:email, pass:pass})
        const requestInit = {
            mode:'cors',
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: newUser
            
        }
        console.log(newUser)
        console.log(requestInit)
        fetch('http://localhost:3002/user',requestInit)
        .then(res => res.json())
        .then(res => alert(res, 'User Added'))
        
    }

    
    return { handleLogin, handleAdd, jwt, setJwt}
}


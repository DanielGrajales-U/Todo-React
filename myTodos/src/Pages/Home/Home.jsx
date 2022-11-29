import React from "react";

import { useLocation } from "wouter"
import './Home.css'

import { Link } from 'wouter'
import Todos from "../../Components/Todos/Todos";
import Loading from "../../Components/Loading/Loading";
import useTodo from "../../Hoocks/useTodo";
import useUser from "../../Hoocks/useUser";

export default function Home(){

    const { loading } = useTodo() 
    const [ path,pushLocation] = useLocation('')
    const { setLoged } = useUser()

    return (
        <div className="home">
            <h1>Todos</h1>
            <div className="links">
                <div className="link link2">
                    <Link to='/addTodo'>AddTodo</Link>
                </div>
                <button className="link3" onClick={()=>{
                    localStorage.clear()
                    pushLocation('/')
                }}>
                    Log-Out
                </button>
            </div>
            {
                loading 
                ? <Loading/>
                : <Todos/>
            }
        </div>
    )    
}
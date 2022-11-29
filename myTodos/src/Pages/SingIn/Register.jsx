import { Link } from 'wouter'

import RegisterComp from "../../Components/Sesion/Register/RegisterComp.jsx";

export  default function Register(){
    return (
        <>
            <div className="links">
                <div className="link link1">
                    <Link to='/login'>Login</Link>
                </div>
            </div>
                <RegisterComp/>
        </>
    )
}
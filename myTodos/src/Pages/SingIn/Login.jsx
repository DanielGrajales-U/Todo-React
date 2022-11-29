import { Link } from 'wouter'

import LoginComp from "../../Components/Sesion/LogIn/LoginComp";

export  default function Login(){
    return (
        <>
            <div className="links">
                <div className="link link1">
                    <Link to='/register'>Register</Link>
                </div>
            </div>
                <LoginComp/>
        </>
    )
}
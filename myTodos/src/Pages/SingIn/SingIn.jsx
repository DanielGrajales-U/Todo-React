import { Link } from 'wouter'

export  default function Singin(){
    return (
        <>
            <div className="links">
                <div className="link link1">
                    <Link to='/login'>Login</Link>
                </div>
                <div className="link link1">
                    <Link to='/register'>Register</Link>
                </div>
            </div>
        </>
    )
}
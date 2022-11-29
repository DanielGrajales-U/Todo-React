import { Link } from 'wouter'

import AddForm from "../../Components/AddForm/AddForm";
import useUser from '../../Hoocks/useUser';
import { useLocation } from "wouter"

export default function AddTodo(){
    const { setLoged } = useUser()
    const [ path,pushLocation] = useLocation('')
    return (
        <>
            <div className="links">
                <div className="link link1">
                    <Link to='/home'>Home</Link>
                </div>
                <button className="link3" onClick={()=>{
                    localStorage.clear()
                    pushLocation('/')
                }}>
                    Log-Out
                </button>
            </div>
            <AddForm/>
        </>
    )
}
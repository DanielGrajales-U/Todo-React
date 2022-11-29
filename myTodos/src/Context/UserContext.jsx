import { createContext,useEffect,useState } from 'react'
import useUser from '../Hoocks/useUser';
import todoService from '../services/GetTodos';

const UserContext = createContext()

  

export function UserProvider ({children}){
    
    const [ jwt,setJwt ] = useState([])   

    return (
        <UserContext.Provider value={{jwt,setJwt}}>
            {children}
        </UserContext.Provider>
    );
}


export default UserContext;
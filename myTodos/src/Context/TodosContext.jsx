import { createContext,useEffect,useState } from 'react'
import useUser from '../Hoocks/useUser';
import todoService from '../services/GetTodos';


const TodosContext = createContext()

  

export function TododosProvider ({children}){
    
    const [ todos,setTodos ] = useState([]);
    const [ routeId, setRouteId ] = useState();
    const { jwt } = useUser();
    const [loading,setLoading] = useState(); 

    useEffect(()=> {
        setRouteId(jwt.id)
    },[jwt])
    
    useEffect(()=>{
        
        todoService(routeId).then(res => {
            setTodos(res.data)
            setLoading(true)
        })
        setLoading(false);
    },[routeId,todos])


    return (
        <TodosContext.Provider value={{todos,setTodos,setRouteId,loading}}>
            {children}
        </TodosContext.Provider>
    );
}


export default TodosContext;
import { useContext,useEffect,useMemo,useState } from 'react'
import TodosContext from '../Context/TodosContext'


export default function useTodo(){
    
    const { todos} = useContext(TodosContext)
    const [ loading,setLoading ]  = useState(false)

    const makeRandomId= (length) => {
        let result = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
          
        }
       return result;
    }

    const [todosI,setTodosI] = useState(todos.filter(act => act.state))
    const [todosC,setTodosC] = useState(todos.filter(act => act.state))

    const [ stateTodo,setStateTodo ] =  useState()


    useEffect(()=>{
        setTodosI(todos.filter(act => !act.state))
        setTodosC(todos.filter(act => act.state))
        setStateTodo()
    },[stateTodo,todos])
    

    const handleToggle = (id)=>{
        const todo = todos.find(act => act.id === id)
        if(todo?.state !== undefined){
            todo.state = !todo.state
        }
        const requestInit = {
            method:'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(todo)
        }
        fetch(`http://localhost:3002/todo/${id}`,requestInit)
        .then(res => res.json())
        .then(res => alert(res, 'Activity Updated'))
        
        setStateTodo(todo)
    } 

    const handleAdd = (act,id)=>{
        const newTodo = JSON.stringify({id:makeRandomId(4), activity:act, state:false, created_by:id})
        const requestInit = {
            mode:'cors',
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: newTodo
        }
        console.log(requestInit)
        fetch('http://localhost:3002/todo',requestInit)
        .then(res => res.json())
        .then(res => alert(res, 'Activity Added'))
        
    }

    const handleRemove = (id)=>{
        const requestInit = {
            method:'DELETE'
        }
        fetch(`http://localhost:3002/todo/${id}`,requestInit)
        .then(res => res.json())
        .then(res => alert(res, 'Activity Deleted'))
    }

    return {todosI,todosC,loading,handleToggle,handleAdd,handleRemove}
}


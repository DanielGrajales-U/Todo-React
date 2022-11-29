import axios from "axios"
import { useState } from 'react'

const GetTodos = ()=>{
  
  let baseURL = ''
  
  const getTodos = async (userId) => {
    try{
        

        baseURL = `http://localhost:3002/todo/${userId}`
        const response = await axios.post(baseURL)

          
        return response
        

       }catch(err){
        console.log(err)
       }
   }

   return getTodos
}

const todoService = GetTodos()

export default todoService
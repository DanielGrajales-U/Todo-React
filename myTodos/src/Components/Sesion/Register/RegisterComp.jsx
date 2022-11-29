import './Register.css';
import { useState } from 'react'
import { useLocation } from "wouter"
import useUser  from '../../../Hoocks/useUser'

export default function RegisterComp() {
  
  const { handleAdd } = useUser()
  const [ user,setUser ] = useState('')
  const [ email,setEmail ] = useState('')
  const [ pass,setPass ] = useState('')
  const [ path,pushLocation] = useLocation('')

    const handleSubmit = evt =>{
        evt.preventDefault()
       
        //Validation data
        if(user === '' || email === '' || pass ===''){
            alert ('Some field is empty')
        }
        else if(user.length > 20 || email.length > 30 || pass.length > 20){
            alert ('maximum size in user 15, in email 30 and password 10')
           
        }
        
        else{
            handleAdd(user,email,pass)
            pushLocation('/')
        }
        
    }
    const handleChangeUser = evt =>{
        setUser(evt.target.value)
    }
    const handleChangeEmail = evt =>{
        setEmail(evt.target.value)
    }
    const handleChangePass = evt =>{
        setPass(evt.target.value)
    }

  return (
    <div className="register">
      <form  onSubmit={handleSubmit}>
        <div className='inputBox'>
          <input type='text' className='input' onChange={handleChangeUser} name='username' id='username' />
          <span >UserName: </span>
        </div>
        <div className='inputBox'>
          <input type='text' className='input' onChange={handleChangeEmail} name='email' id='email' />
          <span >Email: </span>
        </div>
        <div className='inputBox'>
          <input type='password' className='input' onChange={handleChangePass}name='password' id='password' />
          <span >Password: </span>
        </div>
        
        <button>Register</button>
      </form>
    </div>
  );
}
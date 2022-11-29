import './Login.css';
import { useState,  useEffect } from 'react'
import useUser  from '../../../Hoocks/useUser'




export default function LoginComp() {
  
  const { handleLogin } = useUser()
  const [ body,setBody ] = useState({user:'', pass:''})


  const handleSubmit = async (evt) =>{
      
      evt.preventDefault()
      //Validation data
      if(body.user === '' || body.pass ===''){
            console.log(body)
            alert ('Some field is empty')
      }
      else if(body.user.length > 20 || body.pass.length > 20){
          alert ('maximum size in user 15, in email 30 and password 10')
           
      }
        
      else{
       handleLogin(body)
      }
        
    }
    const handleChange = ({ target }) =>{
        const { name, value } = target
        setBody({
          ...body,
          [name]: value
        })
    }
  return (
    <div className="login">
      <form  onSubmit={handleSubmit}>
        <div className='inputBox'>
          <input type='text' className='input' name='user' onChange={handleChange}  id='username' />
          <span >UserName: </span>
        </div>
        
        <div className='inputBox'>
          <input type='password' className='input' name='pass' onChange={handleChange} id='password' />
          <span >Password: </span>
        </div>
        
        <button>Login</button>
      </form>
    </div>
  );
}
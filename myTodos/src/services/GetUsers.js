
const GetUsers = ()=>{
   
   const getUsers = async () => {
    try{
        const response = await fetch('http://localhost:3002/User')
  
        return response.json()
    
       }catch(err){
        console.log(err)
       }
   }


   return getUsers
}

const userService = GetUsers()

export default userService
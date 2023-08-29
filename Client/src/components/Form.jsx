import { useState } from "react";
import validation from "./validation";

function Form ({login}){

    const[userData, setUserData] = useState({
        email:'',
        password:''
    });

    const [errors,setErrors] = useState({})

    const handleChange = (event) =>{
        let property = event.target.name;
        let value = event.target.value;
        
        setUserData({...userData,[property]:value});
        setErrors(validation({...userData,[property]:value}))
    }

    const handleSubmit =(event)=>{
        event.preventDefault()
        login(userData)
    }

return( 
<div>
    <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type='text' name='email' onChange={handleChange} value={userData.email}/>
        <label>Password:</label>
        <input type='text' name='password' onChange={handleChange} value={userData.password}/>
        <button>SUBMIT</button>
    </form>
</div>
); 
}

export default Form;
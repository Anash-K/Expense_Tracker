import { useState } from "react"


const handleInputs = ({inputIdentifier,userData}) =>{
    const [inputs,setInputs] = useState({
        email:"",
        password:"",
        confirmPassword:"",
    });

    const handleUserData = ({inputIdentifier,userData}) =>{
        setInputs((curInput) => ({
            ...curInput,
            [inputIdentifier]: userData,
        }));
    }
}
import { useNavigation } from "@react-navigation/native";
import { useState } from "react"

const AuthContent = ({ isLogin , onAuthentication}) =>{
    const navigator = useNavigation();

    const[credentialsInvalid,setCredentialsInvalid] = useState({
        email:"",
        password:"",
        confirmEmail:"",
        confirmPassword:"",
    });

    const switchAuthModeHandler = () =>{
        if(isLogin){
            navigator.navigate("SignUp")
        }else{
            navigator.navigate('Login')
        }
    };

}
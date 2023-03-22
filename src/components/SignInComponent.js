import { useState, useEffect } from "react";
import{useNavigate} from 'react-router-dom';

function SignInComponent(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [emailErrorS, setEmailError] = useState("");
    const [passwordErrorS, setPasswordError] = useState("");

    const navigate = useNavigate();

    const pokedexPage = () =>{
        navigate("/pokedex")
    }

    useEffect((e)=> {

    }, [passwordErrorS])

   

    const handleEmailInputChange = function(e) {
        console.log("Hi from handleEmailInputChange");
        setEmail(e.target.value);
    }

    const handlePasswordInputChange = function(e) {
        console.log("Hi from handlePasswordInputChange");
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const handleRememberMeInputChange = function(e) {
        console.log("Hi from handleRememberMeInputChange");
        setRememberMe(!rememberMe);
    }

    const handleSubmit = function(e) {
        let emailError = "";
        let passwordError = "";

        if (!email) {
            emailError = "Email can't be empty";
        }

        if (!password) {
            passwordError = "Password can't be empty";
        } else if (password.length < 8) {
            console.log(password.length)
            passwordError = "Password should be at least 8 characters";
        }

        if (emailError || passwordError) {
            setEmailError(emailError);
            setPasswordError(passwordError);
            console.log("emailErrorS", emailErrorS)
            console.log("passwordErrorS", passwordErrorS)
            alert(JSON.stringify({emailError: emailError, passwordError: passwordError}));
            e.preventDefault();
        } else {
            // alert(JSON.stringify({email: email, password: password, rememberMe: rememberMe}));
            pokedexPage();
        }
    }

    return (
        <div >
            <title>{"Sign In"}</title>
            <form onSubmit={handleSubmit} className="loginContent">
                <label>Email: </label>
                <input type={"email"}
                       value={email}
                       onChange={handleEmailInputChange} 
                />
                
                <label>Password: </label>
                <input type={"password"}
                       value={password}
                       onChange={handlePasswordInputChange} 
                />
                
                <label>
                    <input type="checkbox"
                       checked={rememberMe}
                       onChange={handleRememberMeInputChange} 
                    />
                    Remember me
                </label>
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SignInComponent;
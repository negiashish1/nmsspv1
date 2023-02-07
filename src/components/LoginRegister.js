import "./loginRegister.css";
import { Login} from "./Login";
import { useState } from "react";
import { Register } from "./Register";

function LoginRegister() {

    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="message" id="admin">
            {
                currentForm=== "login"? <Login onFormSwitch={toggleForm}/>: <Register onFormSwitch={toggleForm}/>
            }
        </div>
    );
}

export default LoginRegister;
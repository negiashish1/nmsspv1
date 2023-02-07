import {useState} from "react";
export const Login =(props) =>{
    const [email, setEmail] = useState(' ');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <div class="auth-form-container" id="admin">
            <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value = {email} onChange ={(e) => setEmail(e. target.value)} type="email:" placeholder="ID PLEASE!!" id="email" name="email"/>
            <label htmlFor="password">password</label>
            <input value = {pass} onChange ={(e) => setPass (e.target.value)} type="password:" placeholder="********" id = "password" name="password" />
            <button type="submit">Log In</button>
        </form>
<button className= "link-btn" onClick={() => props.onFormSwitch('register')}>Don't have account? Register</button>
        </div>
    );
}
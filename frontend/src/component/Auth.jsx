import React, { useState,useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {login,register,loadUser} from '../actions/user.js';
const Auth = () => {
    let flag=true;
    const dispatch=useDispatch();
    const [isLogin, setisLogin] = useState(true);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const {loading} = useSelector((state) => state.login);
    const loginHandler=(e)=>{
        e.preventDefault();
        dispatch(login(email,password));
    }
    const RegisterHandler=(e)=>{
        e.preventDefault();
        dispatch(register(name,email,password));
    }
    useEffect(() => {
        if(flag){
            dispatch(loadUser());
            flag=false;
        }
    }, [dispatch])
    
    return (
        <form className='auth-container'>
            <h1>{isLogin ? "Login " : "Register "}</h1>
            <label style={isLogin ? {display:"none"}:{display:"block"}} htmlFor="name">Name:</label>
            <input
                style={isLogin ? {display:"none"}:{display:"block"}}
                type="text"
                id="name"
                placeholder='Enter your name'
                onChange={(e)=>setname(e.target.value)} />
            <label htmlFor="email">Email:</label>
            <input
                type="text"
                id="email"
                placeholder='Enter your mail'
                onChange={(e)=>setemail(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                placeholder='Enter password'
                onChange={(e)=>setpassword(e.target.value)} />

            <div>
                <button onClick={isLogin ?loginHandler:RegisterHandler} type='submit' disabled={loading}>{isLogin ?"Login":"Register"}</button>
                <button onClick={() => setisLogin(!isLogin)} type='reset'>{isLogin ?"New Here":"Already have an acconut"}</button>
            </div>
        </form>
    )
}

export default Auth
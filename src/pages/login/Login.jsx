import axios from "axios";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToken } from "../../redux/slice/tokenSlice";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [passwordVisible, setPasswordVisible] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    axios
        .post('https://dummyjson.com/auth/login', Object.fromEntries(data))
        .then(res => {
            console.log(res.data);
            toast.success("You are Logged in")
            dispatch(addToken(res.data.accessToken))
            navigate('/home')
        })
  };
  return (
    <>
        <ToastContainer/>
        <section>
        <div className="container__person">
            <div className="min-h-screen w-full  flex items-center justify-center">
            <div className=" p-8 rounded-lg w-full max-w-md">
                <div className="flex justify-center mb-8">
                </div>
                <h1 className="text-black text-3xl font-bold mb-8 text-center">
                Sign in to Twitter
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <input
                    type="text"
                    placeholder="Username"
                    autoComplete={"off"}
                    name='username'
                    className="w-full px-4 py-3 rounded-md  border border-gray-700 text-black focus:outline-none focus:border-blue-500"
                    required
                    />
                </div>
                <div className="flex items-center relative">
                    <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Password"
                    autoComplete={"off"}
                    name='password'
                    className="w-full h-full px-4 py-3 rounded-md  border border-gray-700  text-black  focus:outline-none focus:border-blue-500"
                    required
                    />
                    <button type="button" href="" className="absolute right-4" onClick={()=> setPasswordVisible(i => !i)}>
                        {passwordVisible ? <FaRegEyeSlash/> : <FaRegEye/>}
                    </button>
                </div>
                <button
                    type="submit"
                    className="w-full bg-white text-black border border-black font-bold py-3 rounded-full hover:bg-gray-200 transition duration-200"
                >
                    Sign In
                </button>
                </form>
                <div className="mt-6 flex justify-between">
                <a href="#" className="text-blue-500 hover:underline">
                    Forgot password?
                </a>
                <a href="#" className="text-blue-500 hover:underline">
                    Sign up for Twitter
                </a>
                </div>
            </div>
            </div>
        </div>
        </section>
    </>
  );
};

export default Login;

import React,{useState} from 'react';
import axios from 'axios';
import {backendUrl} from '../App';
import {toast} from 'react-toastify';


const Login = ({setToken}) => {
        const [email, setEmail] = React.useState('');
        const [password, setPassword] = React.useState('');
        const onSubmit = async(e) => {
                try {
                        e.preventDefault();
                        const response = await axios.post(backendUrl + '/login', {email, password});
                        // console.log(response);
                        // console.log(email,password);
                        if(response.data.success){
                                setToken(response.data.token);  
                        }
                        else{
                                toast.error(response.data.message);
                        }                        
                } catch (error) {
                        console.log(error);
                        toast.error('An error occurred');
                        
                }
        };

        return (
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen flex items-center justify-center">
                        <div className="w-full max-w-md mx-auto mt-20 p-8 bg-white rounded-lg shadow-lg">
                                <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Admin Panel</h1>
                                <form>
                                        <div className="mb-5">
                                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                                                        Email Address
                                                </label>
                                                <input
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        value={email}
                                                        id="email"
                                                        className="rounded-lg w-full px-4 py-3 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-200"
                                                        type="email"
                                                        placeholder="youremail@gmail.com"
                                                        required
                                                />
                                        </div>
                                        <div className="mb-5">
                                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
                                                        Password
                                                </label>
                                                <input
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        value={password}
                                                        id="password"
                                                        className="rounded-lg w-full px-4 py-3 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-200"
                                                        type="password"
                                                        placeholder="Your password"
                                                        required
                                                />
                                        </div>
                                        <button
                                                type="submit"
                                                className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 transition-all duration-200"
                                        >
                                                Log In
                                        </button>
                                </form>
                        </div>
                </div>
        );
};

export default Login;

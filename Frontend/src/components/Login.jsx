

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
import Courses from '../courses/Courses';
import Logout from './Logout';
import Course from './Course';

const Login = () => {
    const navigate=useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };
        try {
            const res = await axios.post("http://localhost:4001/user/login", userInfo);
            if (res.data&& res.data.user) {
                toast.success('Successfully Login!');
                window.location.reload();
                localStorage.setItem("user", JSON.stringify(res.data.user)); // Save user data immediately
                document.getElementById("my_modal_3").close();
                // Navigate using path string
            }
        } catch (err) {
            if (err.response) {
                console.log(err);
                toast.error('This is an error!');
            }
        }
    };

    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Link to="/" className='className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
                        onClick={()=>{
                            document.getElementById("my_modal_3").close();
                        }}>

                       ✕
                        </Link>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='mt-4 space-y-2'>
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder='Enter your Email'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder='Enter your Password'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className='bg-pink-500 text-white font-bold border rounded-md px-3 py-2 hover:bg-pink-700 duration-200'>Login</button>
                        </div>
                        <div className="mt-4">
                            <p>Not Registered?{" "}
                                <Link to="/signup" className='underline cursor-pointer text-blue-500'>Signup</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
}

export default Login;

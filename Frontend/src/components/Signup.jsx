import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router-dom'

const Signup = () => {
  const navigate=useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
       const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password,

       }
       await axios.post("http://localhost:4001/user/signup",userInfo)//API call kiya h backened se data jo hmne diya as API
       .then((res)=>{///then acta as a promise and it coonect to the backened data to the fronted data
        console.log(res.data)
        if(res.data){
          //  alert("SignUp successfull");
           toast.success('Successfully signup');
          navigate("/");

        }
        localStorage.setItem("user",JSON.stringify(res.data.user));
       }).catch((err)=>{
        if(err.response){
          console.log(err);
          // alert("SignUp error:"+err.response.data.message);
          toast.error('This is an error!');
        }
        
       }
    )};
  return (
   <>
  <div className='flex h-screen items-center justify-center ' >
  <div id="my-modal_3" className="">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} >
      {/* if there is a button in form, it will close the modal */}
      <Link to="/">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </Link>
    
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br></br>
        <input type="text" placeholder='Enter your Name' className='w-80 px-3 py-1 border rounded-md outline-none'  {...register("fullname", { required: "Email is required" })}></input>
        {errors.fullname && <span className='text-red-500'>This field id required</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br></br>
        <input type="email" placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: "Email is required" })}></input>
        {errors.email && <span className='text-red-500'>This field id required</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br></br>
        <input type="password" placeholder='Enter your Password' className='w-80 px-3 py-1 border rounded-md outline-none'  {...register("password", { required: "Email is required" })}></input>
        {errors.email && <span className='text-red-500'>This field id required</span>}
    </div>
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white font-bold border rounded-md px-3 py-2 hover:bg-pink-700 duration-200'>SignUp</button>
        <p>Have account?{" "}
    <button className='underline cursor-pointer text-blue-500' onClick={()=>
    document.getElementById("my_modal_3").showModal()

}>Login</button>{" "} 
<Login/></p>
    </div>
    </form>
  </div>
</div>
  </div>
   </>
  )
}

export default Signup
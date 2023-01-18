import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            checkbox: false,
        }
    });

    const handleSignUp = () => {
        console.log('Clicked')
    }

    return (
        <div className='bg-white h-[100vh]'>
            <div className='pt-10'>
                <div className='max-w-[400px] mx-auto shadow-lg rounded-xl'>
                    <div className='text-center py-10 h-[80vh] flex items-center flex-col'>
                        <div className=''>
                            <h1 className='text-3xl font-semibold'>Login</h1>
                            <p>If you don’t have any existing account, first</p>
                            <Link className='font-semibold text-blue-400 hover:underline cursor-pointer'>Sign Up</Link>
                            <form onSubmit={handleSubmit(handleSignUp)} className='w-full'>
                                <div className=' px-5'>
                                    <div className="text-left">
                                        <label className=''> <span className="">First Name</span></label><br />
                                        <input type="text" {...register("Fname", {
                                            required: "Name is Required"
                                        })} className="w-full border p-2 my-3" placeholder='Enter your first name' />
                                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                    </div>
                                    <div className="text-left">
                                        <label className=''> <span className="">Last Name</span></label><br />
                                        <input type="text" {...register("Lname", {
                                            required: true
                                        })} className=" w-full border p-2 my-3" placeholder='Enter your last Name' />
                                        <p className='text-blue-500 text-sm hover:underline cursor-pointer'>Forgot password?</p>
                                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                    </div>
                                </div>
                                <input className='bg-teal-500 w-full p-2 mt-10 rounded-md font-semibold text-white' value='Login' type="submit" />
                                {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
"use client"
import Link from "next/link";
import login_logo from '../../../assets/svg/login_logo.svg';
import Picture from "../Picture/Picture";
import { useRouter } from "next/navigation";

const Form = ({ isLogin }: any) => {
    const router = useRouter();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        {
            isLogin ? (
                router.push('/admin/dashboard')
            ) : (
                console.log("Hello")

            )
        }

    };
    return (
        <div className='grid lg:grid-cols-2 items-center gap-6 mt-5 lg:py-16'>
            <form className='w-full shadow-2xl p-8' onSubmit={handleSubmit}>
                <Link href="/">Welcome Back</Link>
                <h2 className='my-4 text-center text-2xl font-medium'>
                    {isLogin ? "Sign In" : "Sign Up"}
                </h2>
                <div>
                    {!isLogin && (
                        <>
                            <div className='mt-8 mb-2 flex justify-between gap-10'>
                                <div className="w-full">
                                    <label>First Name</label>
                                    <input type="text" className=" text-sm rounded-lg  block w-full p-3 border-2 border-gray-900 mt-1.5" placeholder="first name" required />
                                </div>
                                <div className="w-full">
                                    <label>Last Name</label>
                                    <input type="text" className=" text-sm rounded-lg  block w-full p-3 border-2 border-gray-900 mt-1.5" placeholder="last name" required />
                                </div>
                            </div>
                        </>
                    )}
                    <div className="mt-8 mb-2 flex items-center justify-between gap-10">
                        <div className="w-full">
                            <label>Email</label>
                            <input type="email" className=" text-sm rounded-lg block w-full p-3 border-2 border-gray-900 mt-1.5" placeholder="email@gmail.com" required />
                        </div>
                        {!isLogin && (
                            <div className='w-full'>
                                <label>Phone</label>
                                <input type="text" className=" text-sm rounded-lg block w-full p-3 border-2 border-gray-900 mt-1.5" placeholder="phone number" required />
                            </div>
                        )}
                    </div>
                    <div className='mt-8 mb-2'>
                        <label>Password</label>
                    </div>
                    <input type="password" className=" text-sm rounded-lg block w-full p-3 border-2 border-gray-900" placeholder="password" required />

                    {!isLogin && (
                        <div className='mt-8 mb-2'>
                            <label>Confirm Password</label>
                            <input type="password" className=" text-sm rounded-lg block w-full p-3 border-2 border-gray-900 mt-1.5" placeholder="confirm password" required />
                        </div>
                    )}
                </div>

                {isLogin && (
                    <div className='flex justify-between items-center mt-8'>
                        <span className='flex items-center'>
                            <input type="checkbox" />
                            <h2 className='ml-4'>Remember me</h2>
                        </span>
                        <Link href='/auth/forgot-password'>Forgot Password?</Link>
                    </div>
                )}
                <button type='submit' className='bg-first-200 hover:bg-first-100 text-white duration-500 py-3 px-4 w-full text-lg font-medium rounded-2xl mt-8'>
                    {isLogin ? "SIGN IN" : "SIGN UP"}
                </button>
                <h2 className='text-center mt-6'>
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <Link href={isLogin ? '/auth/register' : '/auth/login'}>
                        {isLogin ? "Register" : "Login"}
                    </Link>
                </h2>
            </form>
            <div className='hidden lg:flex justify-center -mt-28'>
                <Picture image={login_logo} width={550} height={400} />
            </div>
        </div>
    );
};

export default Form;

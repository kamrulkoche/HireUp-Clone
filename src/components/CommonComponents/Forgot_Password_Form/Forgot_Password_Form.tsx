"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import login_logo from '../../../assets/svg/login_logo.svg';
import Picture from "../Picture/Picture";

const Forgot_Password_Form = ({ pageType }: any) => {
    const router = useRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (pageType === "forgot") {
            router.push('/auth/verify-password');
        }
        else if (pageType === "verify") {
            router.push('/auth/reset-password');
        }
        else if (pageType === "reset") {
            router.push('/auth/login');
        }
    };

    return (
        <div className='grid lg:grid-cols-2 items-center gap-6 mt-5 lg:py-16'>
            <form className='w-full shadow-2xl p-8' onSubmit={handleSubmit}>
                <Link href="/">Welcome Back</Link>
                <h2 className='my-4 text-center text-2xl font-medium'>
                    {pageType === "forgot" ? "Forgot Password" : pageType === "reset" ? "Reset Password" : "Verify Password"}
                </h2>
                <div>
                    <div className="mt-8 mb-2 flex items-center justify-between gap-10">
                        {pageType === "forgot" ? (
                            <div className="w-full">
                                <label>Email</label>
                                <input type="email" className="text-sm rounded-lg block w-full p-3 border-2 border-gray-900 mt-1.5" placeholder="email@gmail.com" required />
                            </div>
                        ) : pageType === "verify" ?
                            (
                                <div className="w-full">
                                    <div className="w-full">
                                        <label>Code</label>
                                        <input type="text" className="text-sm rounded-lg block w-full p-3 border-2 border-gray-900 mt-1.5" placeholder="code" required />
                                    </div>
                                    <Link href='/forgot-password' className="flex justify-end mt-4">Forgot Password?</Link>
                                </div>
                            ) :
                            (
                                <div className="w-full">
                                    <div className="w-full">
                                        <label>Password</label>
                                        <input type="password" className="text-sm rounded-lg block w-full p-3 border-2 border-gray-900 mt-1.5" placeholder="password" required />
                                    </div>
                                    <div className="w-full mt-8">
                                        <label>Confirm Password</label>
                                        <input type="password" className="text-sm rounded-lg block w-full p-3 border-2 border-gray-900 mt-1.5" placeholder="confirm password" required />
                                    </div>
                                    <Link href='/forgot-password' className="flex justify-end mt-4">Forgot Password?</Link>
                                </div>
                            )

                        }
                    </div>
                </div>

                <button type='submit' className='bg-blue-600 text-white py-3 px-4 w-full text-lg font-medium rounded-2xl mt-6'>
                    Submit
                </button>

            </form>
            <div className='hidden lg:flex justify-center -mt-28'>
                <Picture image={login_logo} width={550} height={400} />
            </div>
        </div>
    );
};

export default Forgot_Password_Form;

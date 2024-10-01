import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import project_logo from '../../assets/images/hireUp_logo.png';
import Picture from "../CommonComponents/Picture/Picture";

const Footer = () => {
    return (
        <div>
            <div className="bg-sixth-black pb-10 xl:py-10 text-fifth-white text-xs font-medium px-2  ">
                <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 xl:gap-40 lg:justify-items-center items-center px-4 container mx-auto">
                    <div className="justify-start w-full flex items-center xl:col-span-2">
                        <Picture image={project_logo} width={300} height={300} />
                        <p className="mt-5">We compared and reviewed the best money transfer web & apps based on  features, fees, transfer remittance, Me link for a quick and secure  payment option payment option payment option payment option..</p>
                    </div>
                    <div className="lg:col-span-3 w-full flex justify-between">
                        <div className="flex justify-between w-full">
                            <div className="text-center ">
                                <h3 className="font-medium underline"> Contact Us</h3>
                                <p className="mt-4 font-medium">Email: email@gmail.com</p>
                                <p className="mt-4 font-medium">Phone: +880171234567</p>
                            </div>
                            <div className="grid content-between text-center">
                                <div>
                                    <h2 className="font-medium underline">About Us</h2>
                                </div>
                                <div>
                                    <h2 className="font-medium underline"> Terms and Conditions</h2>
                                </div>
                                <div>
                                    <h2 className="font-medium underline">Help & Support</h2>
                                </div>
                            </div>
                            <div className="hidden sm:block">
                                <h3 className="font-medium underline mb-4 text-end">Follow us</h3>
                                <ul className="flex gap-5">
                                    <li className="bg-[#723EEB] hover:bg-[#4d27a3] duration-500 text-white text-xl p-1 rounded-lg cursor-pointer"><CiFacebook /></li>
                                    <li className="bg-[#723EEB] hover:bg-[#4d27a3] duration-500 text-white text-xl p-1 rounded-lg cursor-pointer"><FaInstagram /></li>
                                    <li className="bg-[#723EEB] hover:bg-[#4d27a3] duration-500 text-white text-xl p-1 rounded-lg cursor-pointer"><FaLinkedinIn /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sm:hidden">
                        <h3 className="font-medium underline mb-4 text-center">Follow us</h3>
                        <ul className="flex gap-5 justify-center">
                            <li className="bg-[#723EEB] hover:bg-[#4d27a3] duration-500 text-white text-xl p-1 rounded-lg cursor-pointer"><CiFacebook /></li>
                            <li className="bg-[#723EEB] hover:bg-[#4d27a3] duration-500 text-white text-xl p-1 rounded-lg cursor-pointer"><FaInstagram /></li>
                            <li className="bg-[#723EEB] hover:bg-[#4d27a3] duration-500 text-white text-xl p-1 rounded-lg cursor-pointer"><FaLinkedinIn /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-second-100 ">
                <p className="text-fifth-white text-xs text-center py-2 ">Copyright © 2024, All Right Reserved HireUp </p>
            </div>
        </div>
    )
}

export default Footer
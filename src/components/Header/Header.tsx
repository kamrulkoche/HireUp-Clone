"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import project_logo from '../../assets/images/hireUp_logo.png';
import Picture from '../CommonComponents/Picture/Picture';
import Search from '../CommonComponents/Search/Search';

// MenuLinks Component
// const MenuLinks = () => (
//     <>
//         <Link href="/login">Offers</Link>
//         <Link href="/login">Help & Support</Link>
//         <Link href="/login">Login</Link>
//         <Link href="/register">Sign Up</Link>
//         <FaCartPlus className='text-4xl' />
//     </>
// );

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname()

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='fixed top-0 left-0 w-full bg-fifth-white shadow-md z-50 '>
            <div className='container mx-auto px-2 sm:px-4 lg:px-10'>
                <div className='flex items-center justify-between'>
                    <div className=''>
                        <Link href="/"><Picture image={project_logo} width={80} height={80} /></Link>
                    </div>
                    <div className='flex items-center font-medium'>
                        <div className='sm:w-80 md:w-96'>
                            {pathname == '/' && (
                                <div className='sm:w-80 md:w-96'>
                                    <Search />
                                </div>
                            )}
                        </div>
                        {/* Desktop Menu */}
                        <div className="hidden xl:flex items-center gap-8">
                            <Link href="/login">Offers</Link>
                            <Link href="/login">Help & Support</Link>
                            {pathname !== '/auth/login' && (
                                <Link href="/auth/login">Login</Link>
                            )}
                            {pathname !== '/auth/register' && (
                                <Link href="/auth/register">Sign Up</Link>
                            )}
                            <FaCartPlus className='text-4xl' />
                        </div>
                        {/* Mobile Menu */}
                        <div className={`fixed top-0 left-0 h-full w-1/2 bg-fifth-white bg-opacity-100 z-50 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out 2lg:hidden`}>
                            <div className="xl:hidden grid gap-8 mt-10 pl-10">
                                <Link href="/login">Offers</Link>
                                <Link href="/login">Help & Support</Link>
                                {pathname !== '/auth/login' && (
                                    <Link href="/auth/login">Login</Link>
                                )}
                                {pathname !== '/auth/register' && (
                                    <Link href="/auth/register">Sign Up</Link>
                                )}
                                <FaCartPlus className='text-4xl' />
                            </div>
                        </div>
                        <button
                            onClick={toggleMenu}
                            className="block xl:hidden text-4xl text-sixth-black cursor-pointer p-2"
                        >
                            {menuOpen ? <IoMdClose /> : <IoMdMenu />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

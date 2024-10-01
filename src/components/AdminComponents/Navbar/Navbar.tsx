import Picture from '@/components/CommonComponents/Picture/Picture';
import Link from "next/link";
import { useState } from 'react';
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoHome } from "react-icons/io5";
import { IoMdClose, IoMdMenu, IoMdNotifications } from "react-icons/io";
import project_logo from '../../../assets/images/hireUp_logo.png';

interface NavbarProps {
    toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        toggleSidebar();
    };

    return (
        <div className='container mx-auto'>
            <div className="py-4 px-6 flex justify-between items-center">
                <div className='lg:hidden'>
                    <Link href="/"><Picture image={project_logo} width={80} height={40} /></Link>
                </div>
                <ul>
                    <li className='hidden lg:block'><Link href="/"><span className="flex items-center gap-2 text-lg font-medium"><IoHome className="text-xl" /> Home</span></Link></li>
                </ul>
                <ul className="flex items-center gap-4 justify-end flex-1">
                    {/* <li className="sm:w-80 md:w-96"><Search /></li> */}
                    <li><Link href="profile"><span className="flex items-center gap-2 text-lg font-medium"><CgProfile className="text-xl" /> Profile</span></Link></li>
                    <li><IoMdNotifications className="text-xl" /></li>
                    <li className='hidden sm:block'><span className="flex items-center gap-2 text-lg font-medium"><BiLogOut className="text-xl" /> Log Out</span></li>
                    <button onClick={handleMenuToggle} className="lg:hidden text-2xl">
                        {menuOpen ? <IoMdClose /> : <IoMdMenu />}
                    </button>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;

import Picture from '@/components/CommonComponents/Picture/Picture';
import Link from 'next/link';
import { BiLogOut } from 'react-icons/bi';
import { FaListAlt } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa6";
import { MdDashboard, MdOutlineProductionQuantityLimits } from "react-icons/md";
import project_logo from '../../../assets/images/hireUp_logo.png';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <div className=''>
            <div className={`bg-slate-100 z-50 py-8 px-4 w-60 min-h-screen fixed lg:relative lg:block transition-transform duration-100 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                {/* Sidebar Content */}
                <div className='container mx-auto '>
                    <div className='w-64 pt-10'>
                        <div className='-mt-20 hidden lg:block'>
                            <Link href="/"><Picture image={project_logo} width={150} height={150} /></Link>
                        </div>
                        <ul className='grid gap-6'>
                            <li>
                                <Link href="dashboard">
                                    <span className='flex items-center gap-2 text-xl font-medium'><MdDashboard /> Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="all-products">
                                    <span className='flex items-center gap-2 text-xl font-medium'><MdOutlineProductionQuantityLimits /> All Products</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="order-list">
                                    <span className='flex items-center gap-2 text-xl font-medium'><FaListAlt /> Order List</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="categories">
                                    <span className='flex items-center gap-2 text-xl font-medium'><FaSitemap /> Categories</span>
                                </Link>
                            </li>
                            <li className='sm:hidden'>
                                <Link href="categories">
                                    <span className='flex items-center gap-2 text-xl font-medium'><BiLogOut /> Log Out</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

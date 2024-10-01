"use client"; // This marks the component as a Client Component
import Navbar from '@/components/AdminComponents/Navbar/Navbar';
import Sidebar from '@/components/AdminComponents/Sidebar/Sidebar';
import Footer from '@/components/Footer/Footer';
import { useState } from 'react';
import '../../styles/globals.css';

// export const metadata = {
//     title: 'Admin Panel',
//     description: 'Admin dashboard layout',
// };

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <html lang="en">
            <body className="font-poppins">
                <div className="flex">
                    <div className="fixed z-40 pt-20 lg:pt-0">
                        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                    </div>
                    <div className="flex-1 flex flex-col min-h-screen lg:ml-60">
                        <div className="sticky top-0 z-40 bg-white border-b-2 w-full">
                            <Navbar toggleSidebar={toggleSidebar} />
                        </div>
                        <main className="pt-4 container mx-auto ">
                            <div className='lg:ml-2 px-4'>
                                {children}
                            </div>
                        </main>
                        <div className=''>
                            <Footer />
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}

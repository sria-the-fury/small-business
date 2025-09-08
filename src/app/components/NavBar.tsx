'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/our-works', label: 'Our Works' },
        { href: '/contacts', label: 'Contacts' },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 z-50 w-full bg-white/10 backdrop-blur-md shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                        <div className="flex-shrink-0">
                            <Link href="/"
                                  className="text-2xl font-bold text-white hover:text-gray-400 transition-colors">
                                Pipe Doctor
                            </Link>
                        </div>

                        <nav className="hidden md:flex md:items-center md:space-x-10 ">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="font-medium text-white hover:text-blue-500 transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>


                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="text-white hover:text-blue-500 focus:outline-none"
                                aria-label="Open menu"
                            >
                                <FiMenu size={24}/>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div
                className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >

                <div
                    className="absolute inset-0 bg-black/50"
                    onClick={() => setIsOpen(false)}
                ></div>


                <div
                    className={`relative top-0 left-0 h-full w-64 bg-white/20 backdrop-blur-md shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <div className="flex justify-between items-center p-4 border-b border-gray-200">
                        <h2 className="text-xl font-bold text-white">Menu</h2>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-blue-500 focus:outline-none"
                            aria-label="Close menu"
                        >
                            <FiX size={24}/>
                        </button>
                    </div>
                    <nav className="flex flex-col p-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)} // Close sidebar on link click
                                className="text-white hover:bg-blue-50 hover:text-blue-600 p-3 rounded-md transition-all duration-200 text-lg"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
}

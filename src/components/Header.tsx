'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';
import { useScrollHeader } from '@/hooks/useScrollHeader';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isScrolled = useScrollHeader();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'top-4 md:top-6' : 'top-0'}`}>
            <Container className={`!px-0 transition-all duration-300 ${isScrolled ? 'md:px-6' : 'md:px-0'}`}>
                <nav className={`mx-auto flex justify-between items-center transition-all duration-300 ${
                    isScrolled
                        ? 'glass rounded-full py-3 px-6 md:py-4 md:px-8 shadow-xl border border-white/20'
                        : 'bg-transparent md:bg-transparent py-2 px-5 md:py-10 shadow-md md:shadow-none'
                }`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image src={siteDetails.siteLogo} alt="Syllabi Logo" width={32} height={32} className="group-hover:scale-110 transition-transform" />
                        <span className="manrope text-xl font-semibold text-foreground cursor-pointer group-hover:text-purple-600 transition-colors">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 items-center">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} target={item.url.startsWith('http') ? '_blank' : undefined} rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-foreground hover:text-purple-600 transition-colors font-medium">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/docs/getting-started" className="relative group overflow-hidden text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105">
                                <span className="relative z-10">Get Started</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white focus:outline-none rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden glass border-t border-purple-100 shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} target={item.url.startsWith('http') ? '_blank' : undefined} rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-foreground hover:text-purple-600 block font-medium transition-colors" onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/docs/getting-started" className="text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-5 py-2 rounded-full block w-fit shadow-lg transition-all" onClick={toggleMenu}>
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;

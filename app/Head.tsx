'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Dancing_Script } from 'next/font/google';
import { Dangrek } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const dacing = Dancing_Script({
    subsets: ['latin'],
    weight: '700',
    style: 'normal',


});
const dgrek = Dangrek({
    subsets: ['latin'],
    weight: '400',
    style: 'normal',


});

export default function Head() {
    const [navbar, setNavbar] = useState(false);
    return (
        <header>

            <nav className="w-full  bg-gradient-to-tr bg-rose-300 shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href="/" className='flex justify-center pl-1 '>


                                <h2 className={`${dgrek.className} text-5xl   from-sky-600 via-indigo-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent  `}>Learn Teach Global</h2>

                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={3}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">


                                <li className="text-black font-bold text-xl flex justify-center   px-3" >
                                    <Link href="/tesoleducation" scroll={false} >
                                        Tesol Cetificate
                                    </Link>
                                </li>
                                <li className="text-black font-bold text-xl flex justify-center   px-3" >
                                    <Link href="/englishmaster" scroll={false} >
                                        English Masterclass
                                    </Link>
                                </li>
                                <li className="text-black font-bold text-xl flex justify-center   px-3" >
                                    <Link href="/arabicmaster" scroll={false}>
                                        Arabic Masterclass
                                    </Link>
                                </li>
                                <li className="text-black font-bold text-xl flex justify-center   px-3" >
                                    <Link href="/#contact" scroll={false}>
                                        Contact US
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    );
}
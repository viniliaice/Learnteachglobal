import Image from 'next/image'
import React from 'react'
// import Facebook from '../public/facebook.svg'
// import Instagram from '../public/instagram.svg'
// import Google from '../public/google.svg'
// import Link from 'next/link'
import { Dancing_Script } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const dacing = Dancing_Script({
    subsets: ['latin'],
    weight: '700',
    style: 'normal',


});
export const Footer = () => {
    return (<>
        <div className='grid md:grid-cols-3 bg-rose-300 p-3 divide-y-2  py-10 md:divide-y-0 md:divide-x-2 divide-blue-700'>
            <div className=" font-serif text-2xl py-4 pl-5">
                <div className="text-4xl font-serif font-bold text-fuchsia-600">Learn</div>
                <div className="text-5xl font-serif font-bold  text-indigo-700">Teach</div>
                <div className="text-7xl font-serif font-bold text-indigo-700">Global</div></div>
            <div className="font-mono  px-2 py-4"><h1 className='font-sans  text-2xl font-bold flex justify-center'>Contact US</h1>
                <h2> <p className='font-bold'>Phone Number:</p> +252634856606 ; +252636330000 ; +252636381779  </h2>

            </div>
            <div className="flex flex-row justify-center md:items-center md:flex-col p-5">
                {/* <Link href='https://www.facebook.com/mbkinternationalschool'>   <Image src={Facebook} alt='facebook link' className='m-3' about='facebook' width={50} height={50} /></Link>
                <Link href='https://www.instagram.com/mbk.international.schools/'> <Image src={Instagram} alt='Instagram link' className='m-3' about='Instagram' width={50} height={50} /></Link>
                <Link href='https://www.google.com/search?q=mbk+international+school&oq=MBk&aqs=chrome.2.69i57j69i59l3j69i60l3.13838491j0j15&sourceid=chrome&ie=UTF-8'>   <Image src={Google} alt='Google link' className='m-3' about='Google' width={50} height={50} /></Link> */}

            </div>

        </div>
        <div className={`${dacing.className} text-3xl text-blue-500 bg-rose-300 p-10 flex justify-center font-black`}>Made By AKSO</div></>
    )
}

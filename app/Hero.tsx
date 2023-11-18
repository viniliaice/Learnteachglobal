import Image from 'next/image'
import React from 'react'

import Heroimage from '../public/hero.jpg'
import { Poppins } from 'next/font/google';


import { PT_Serif } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
    subsets: ['latin'],
    weight: '500',
    style: 'normal',


});

// If loading a variable font, you don't need to specify the font weight
const inter = PT_Serif({
    subsets: ['latin'],
    weight: '700',
    style: 'italic',




});
export const Hero = () => {
    return (
        <div id='hero' className="grid md:grid-cols-2   bg-gradient-to-t from-rose-200 to-rose-300">
            <div className=" transition duration-2000 ease-in-out hover:duration-500 hover:ease-out flex flex-col justify-start  items-center  my-5 ml-4 md:justify-center    text-2xl">
                <h1 className={`${poppins.className} text-7xl items-start  text-blue-700   text-left object-left-top`}> Learn </h1>
                <h1 className={`${inter.className}font-serif text-left text-6xl  `}>  Teach</h1>
                <h1 className={`${inter.className}font-serif text-6xl text-left  `}>  Global</h1>
            </div>
            <div className="flex flex-row rounded-3xl   my-5 mx-2  overflow-hidden" >
                <Image alt='heroimage' className='  bg-cover   opacity-75   ' src={Heroimage} />

            </div>

        </div>
    )
}

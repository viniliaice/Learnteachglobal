import Image from 'next/image'
import React from 'react'
import Football from '../public/football.jpg'

import { PT_Serif } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const poppins = PT_Serif({
    subsets: ['latin'],
    weight: '700',
    style: 'italic',




});
export const About = () => {
    return (
        <div className="  bg-rose-200 flex flex-col justify-center items-center  " id='about'>
            <h1 className={`${poppins.className} text-5xl  px-4 text-center font-black md:pt-10`}>The Importance of the Education.</h1>
            <div className="px-10 p-14 pb-32 grid md:grid-cols-3 divide-blue-900 divide-y-2 md:divide-y-0  md:divide-x-2">
                <div className={`${poppins.className} md:col-span-2 divide-emerald-800 p-4 `}>
                    <h1 className={`${poppins.className} text-3xl  pb-3 font-black`}>What Is Education? </h1>
                    <p className=' text-slate-600 font-sans font-black'>Education means studying in order to obtain a deeper knowledge and understanding of a variety of subjects to be applied to daily life. Education is not limited to just knowledge from books, but can also be obtained through practical experiences outside of the classroom.Why Is Education Important?
                        There are many different understandings and definitions of what education is, but one thing can be universally agreed upon, which is the importance of education.</p></div>
                <div className={`${poppins.className} divide-emerald-800 p-4 `}><h1 className={`${poppins.className} text-3xl  pb-3 font-black`}>Provides Stability</h1> <p className='text-slate-600 to-black'>Education provides stability in life, and it’s something that no one can ever take away from you. By being well-educated may increase your chances for better career opportunities, open up new doors for yourself and educating your children also.</p></div>
                <div className={`${poppins.className} divide-emerald-800 p-4 `}><h1 className=' text-3xl font-black pb-3  '>Provides Financial Security</h1> <p className='text-slate-600 font-black '>Education can also provide financial security, especially in today’s society. A good education tends to lead to a higher paying job, as well as provide you with the skills needed to get there.</p></div>
                <div className={`${poppins.className} divide-emerald-800 p-4 md:col-span-2 `}><h1 className={`${poppins.className} text-3xl  pb-3 font-black`}>Education Can Help You Achieve Your Goals</h1> <p className='text-slate-600 font-black'>If you can dream it, you can achieve it. An education is the most powerful weapon you can possibly have, and with it, you can make all of your dreams come true. There are of course certain exceptions, depending on what you’re aiming for, but generally an education will take you as far as you’re willing to go.</p></div>


            </div>

        </div>
    )
}

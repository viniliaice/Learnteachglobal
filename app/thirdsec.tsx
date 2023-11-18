import Image from 'next/image'
import React from 'react'
import muslimgirl from "../public/muslimgirl.jpg";




import { PT_Serif } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const poppins = PT_Serif({
    subsets: ['latin'],
    weight: '700',
    style: 'italic',




});

const Thirdsec = () => {
    return (
        <div className=' flex flex-col items-center justify-center centers bg-rose-200'>
            <h1 className='pt-10 text-6xl'>How To Study with us</h1>
            <div className="grid place-items-center  md:grid-cols-2">
                <Image src={muslimgirl} alt='studyingMuslim' className=' place-content-center rounded-full h-2/3 w-auto m-10 overflow-hidden' />
                <div className="grid grid-flow-row items-start content-center ">
                    <ul className={`${poppins.className}grid grid-flow-row items-start content-center list-outside list-disc text-3xl  m-4 md:m-0`}>
                        <li className='py-3'>Start a Introduction with a Instructor to Guide you.</li>
                        <li className='py-3'>Begin Study the Modules with a Instructor</li>
                        <li className='py-3'>Do the Asignments on Time and Continue Progressing</li>
                        <li className='py-3'>Do the Work and get  the Reward with a Certified Certificate</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Thirdsec
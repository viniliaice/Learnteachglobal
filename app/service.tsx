import React from 'react'
// import Stadium from '../public/stadium.svg'
// import watch from '../public/watch.svg'
// import parking from '../public/parking.svg'
import Image from 'next/image'
import Link from 'next/link'
export const Service = () => {
    return (<div className="bg-gradient-to-t from-rose-300 to-rose-200 py-7"> <h1 className='text-6xl font-thin pl-4'>Cousres for Women</h1>
        <div className="grid md:grid-cols-3 p-2   justify-items-center " id='service'>
            <div className=" hover:scale-105 animate duration-500 shadow-2xl hover:shadow-fuchsia-400 rounded p-6    max-w-lg h-150  min m-2 bg-pink-300  flex flex-col items-center">
                {/* <Image alt='staduim' src={Stadium} className=' w-32' /> */}
                <h1 className='   font-black text-4xl pt-2'>Tesol Cetificate</h1>
                <p className=' max-w-lg pt-3 font-serif text-lg line-clamp-6 '> Welcome to our unique English Masterclass, designed exclusively for women by women. This intensive, online course is designed to equip you with the essential skills needed to excel in English, whether you are a beginner, an intermediate learner, or someone looking to improve their proficiency.

                    Our expert instructors are passionate about empowering women through education and have dedicated their time and energy to create a comprehensive, engaging, and inspiring learning experience. We believe that every woman deserves the opportunity to learn, grow, and succeed, and we are committed to making that happen.

                    The course covers a wide range of topics, from basic grammar and vocabulary to advanced reading comprehension and writing skills.</p>
                <Link className=' animate duration-1000 hover:shadow-fuchsia-400 shadow-lg border mt-8 p-2 text-xl rounded font-semibold text-pink-800 d bg-white' href='./tesoleducation'>Read more...</Link>
            </div>
            <div className=" shadow-2xl hover:scale-105 animate duration-500  hover:shadow-fuchsia-400 rounded max-w-lg h-150 p-4 m-2 bg-pink-300  flex flex-col items-center">
                {/* <Image alt='staduim' src={watch} className=' w-32' /> */}
                <h1 className='   font-black text-4xl pt-2'>English Masterclass</h1>
                <p className='max-w-lg pt-3 font-serif text-lg line-clamp-6 '>MBK Stadium is a great place to host your next event! We offer flexible renting hours to accommodate your schedule and make it easy for you to get what you pay for. Our team is dedicated to providing you with the best possible experience, so you can focus on enjoying your event. Contact us today to learn more about our renting hours and how we can help make your next event a success!</p>

                <Link className=' animate duration-1000 hover:shadow-fuchsia-400 shadow-lg border mt-8 p-2 text-xl rounded font-semibold text-pink-800 d bg-white' href='./englishmaster'>Read more...</Link>
            </div>
            <div className=" shadow-2xl hover:scale-105 animate duration-500  hover:shadow-fuchsia-400 rounded max-w-lg h-150 p-4 m-2 bg-pink-300  flex flex-col items-center">
                {/* <Image alt='staduim' src={parking} className=' w-32 ' /> */}
                <h1 className='   font-black text-4xl pt-2 '>Arabic Masterclass</h1>
                <p className='max-w-lg pt-3 text-lg line-clamp-6  font-serif'>Come park your car at MBK Stadium! Our parking facilities are safe and secure, so you can enjoy your event without worrying about your vehicle. We offer flexible parking options to accommodate your schedule and make it easy for you to get what you pay for. Contact us today to learn more about our parking facilities and how we can help make your next event a success!</p>
                <Link className=' animate duration-1000 hover:shadow-fuchsia-400 shadow-lg border mt-8 p-2 text-xl rounded font-semibold text-pink-800 d bg-white' href='./arabicmaster'>Read more...</Link>
            </div>



        </div>
        <h1 className='text-6xl font-thin pb-3 pt-10 pl-4'>Cousres for Kids</h1>
        <div className="grid md:grid-cols-2 p-2   justify-items-center " id='service'>

            <div className=" shadow-2xl hover:scale-105 animate duration-500  hover:shadow-fuchsia-400 rounded max-w-lg h-150 p-4 m-2 bg-pink-300  flex flex-col items-center">
                {/* <Image alt='staduim' src={watch} className=' w-32' /> */}
                <h1 className='   font-black text-4xl pt-2'>Reading Program</h1>

                <p className='max-w-lg pt-3 font-serif text-lg  line-clamp-6'>Join our Reading Program for kids, designed to foster a love for books and improve reading skills. Our program is interactive, engaging, and tailored to the childs reading level, ensuring they receive the most out of their learning experience. With a variety of activities and lessons, your child will not only enjoy reading but also gain confidence and improve their comprehension skills. Our program is perfect for both homeschooling and traditional schooling environments. We believe in the power of reading to build a strong foundation for future learning. Lets embark on this exciting journey together!</p>
                <Link href='./'> Read more</Link>
            </div>
            <div className=" shadow-2xl hover:scale-105 animate duration-500  hover:shadow-fuchsia-400 rounded max-w-lg h-150 p-4 m-2 bg-pink-300  flex flex-col items-center">
                {/* <Image alt='staduim' src={parking} className=' w-32 ' /> */}
                <h1 className='   font-black text-4xl pt-2 '>Stadium</h1>
                <p className='max-w-lg pt-3 text-lg  font-serif'>Come park your car at MBK Stadium! Our parking facilities are safe and secure, so you can enjoy your event without worrying about your vehicle. We offer flexible parking options to accommodate your schedule and make it easy for you to get what you pay for. Contact us today to learn more about our parking facilities and how we can help make your next event a success!</p>
            </div>



        </div>







    </div>
    )
}

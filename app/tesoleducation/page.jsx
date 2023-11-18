'use client'
import React, { useState } from 'react'

import Heroimage from '../../public/hero.jpg'
import { Disclosure, Tab, Transition } from '@headlessui/react'

import Image from 'next/image';
import { Dancing_Script } from 'next/font/google';
import { Dangrek } from 'next/font/google';
import List from './list'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
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
const ListItem = ({  text }) => {
    return (
      <li className=" flex   overflow-clip  list-inside  mb-8 pl-3 ">
    
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-rose-700">
  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>



        <span className=' pl-1 line-clamp-2'>{ text}</span>
      </li>
    );
  };


const Footbal = () => {


    return (
        <div className={`${dgrek.className} flex flex-col md:flex-row md:p-10 justify-center items-center`}>
            <div className=" min-w-md max-w-md  md:h-1/2 bg-rose-200 mb-8  rounded-xl overflow-hidden">
                <Image alt='studying iamge'  priority src={Heroimage}  className=' h-max w-fit' />
                <p className='p-3 text-4xl font-bold'>The Certificate in TESOL Education </p>
                <p className='p-3 text-lg font-semibold'>this Cousre will include </p>
                <ul className='list-inside list-disc mb-3 pl-3'>
                    <li>Assingments</li>
                    <li>4-5 hours of learning Weekly</li>
                    <li>Availability : 10am – 2pm GMT (Saturday – Thursday)</li>
                    
                    <li>Full Cost of the Course is €150  </li>
                    
                </ul>

            </div>
            <div className=" text-start justify-start items-start m-3 md:pl-5 max-w-3xl">
                <h1 className='font-black text-4xl text-rose-600'>Certificate in TESOL Education</h1>
                <p className=' text-slate-500 py-5'>The Certificate in TESOL Education is your door to becoming an ESL teacher and/or tutor.  You will gain essential knowledge and skills on the foundation of ESL teaching through this course. This course aims to ready you for ESL teaching.  Assessments have the goal of putting you in the classroom.  Most assessments will ask you to imagine you are in a classroom environment and require you to discuss how you would organise and teach your class.  As you progress in the course, you will develop your own views on education and it is encouraged to show your views in your assessments.    </p>

                <div className=" border-2 border-rose-200 bg-rose-200 rounded-xl p-5"> <h1 className='font-black text-2xl mb-4'>In this Cousre, You wil Learn How to</h1>
                    <ul className=' grid md:grid-cols-2'>
                         <ListItem  text="The definition and working understanding of Phonetics" />
                            <ListItem  text="Pedagogy and methodology" />
                            <ListItem  text="Important words and concepts" />
                            <ListItem  text="Various ESL teaching methods" />
                            <ListItem  text="Classroom layout" />
                            <ListItem  text="Positive discipline" />
                            <ListItem  text="Lesson Planning" />
                            <ListItem  text="Different types of learners" />
                            <ListItem  text="TESOL student levels" />
                            <ListItem  text="Unit Planning" />
                            <ListItem  text="Inclusive education" />
                            <ListItem  text="Four language skills" />
                            <ListItem  text="High tech vs low tech" />
                            <ListItem  text="Teaching strategies" />
                            <ListItem  text="Individual learning and group learning" />
                            <ListItem  text="Student assessment" />
                            <ListItem  text="IELTS" />
                            <ListItem  text="Your Education Philosophy" />
                      
                    </ul>

                </div>
                
                <Tab.Group >
      <Tab.List className='flex space-x-1 rounded-tl-lg rounded-tr-lg bg-rose-200 mt-10'>
      <Tab  className={({ selected }) =>
                classNames(
                  'w-full rounded-tl-lg rounded-tr-lg py-2.5 text-sm font-medium leading-5 text-black',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-rose-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-black hover:bg-white/[0.12] hover:text-white'
                )
              }>
     Course Modules
        </Tab>
      <Tab  className={({ selected }) =>
                classNames(
                  'w-full rounded-tl-lg rounded-tr-lg py-2.5 text-sm font-medium leading-5 text-black',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-rose-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-black hover:bg-white/[0.12] hover:text-white'
                )
              }>
        Course Description
        </Tab>

 
      </Tab.List>
      
      <Tab.Panels  className=' bg-rose-200 ease-in duration-500'>
        <Tab.Panel className='py-5  ease-linear duration-500'> <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-black hover:bg-rose-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className='text-2xl'>Module One</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${
                    open ? ' duration-500 rotate-180 transform' : ''
                  } duration-500 h-5 w-5 text-purple-500`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
</svg>

              
              </Disclosure.Button>
              <Transition show={open}
        enter="transform transition duration-500 ease-in"
        enterFrom=" scale-30 opacity-0"
        enterTo=" scale-100 opacity-100"
        leave="transition transform duration-75 ease-out"
        leaveFrom=" scale-100 opacity-100"
        leaveTo=" scale-95 opacity-0"
       
      >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-slate-500">
             <ul className=' list-image-check list-inside text-lg'>
              <li>History of Language</li>
              <li>Brief history of the English Language</li>
              <li>What is Phonetics?</li>
             
             </ul>
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure></Tab.Panel>

        <Tab.Panel>
          
          <div className="p-6">The Certificate in TESOL Education is your door to becoming an ESL teacher and/or tutor.  You will gain essential knowledge and skills on the foundation of ESL teaching through this course. This course aims to ready you for ESL teaching.  Assessments have the goal of putting you in the classroom.  Most assessments will ask you to imagine you are in a classroom environment and require you to discuss how you would organise and teach your class.  As you progress in the course, you will develop your own views on education and it is encouraged to show your views in your assessments.    </div>
        </Tab.Panel>
        
      </Tab.Panels>
    </Tab.Group>
 
            </div>


        </div >
    )
}

export default Footbal


import React from 'react'

import { Service } from './service'
import { About } from './ImportanceofEducaton'
import { Hero } from './Hero'
import { Footer } from './Footer'
import { Metadata } from 'next';
import Thirdsec from './thirdsec'


const Footbal = () => {
    return (
        <div>
            <Hero />
            <About key='about' />
            <Thirdsec />
            <Service key='service' />



        </div>
    )
}

export default Footbal

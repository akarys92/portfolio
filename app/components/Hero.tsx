'use client'
import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../components/BackgroundCircles'; 


type Props = {}

const Hero = (props: Props) => {
    const [ text, count ] = useTypewriter({
        words: [
            "Hi, my name is Alex Karys. ", 
            "I love marketplaces, blockchains and supply chains.", 
            "And sometimes write a little code :) ", 
            "Let's get in touch!"
        ], 
        loop: true, 
        delaySpeed: 2000
    }); 

    return (
        <div className='h-screen flex flex-col space-y-8 text-center overflow-hidden justify-center'>
            <BackgroundCircles />
            <img src="/images/headshot.png" alt="" 
                className='realtive rounded-full h-32 w-32 mx-auto object-cover'
            /> 
            <div className='z-20'>
                <h2 className='tex-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Product Lead</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                    <span className='mr-3'>{ text } </span>
                    <Cursor cursorColor='white' />
                </h1>
                <div className='pt-5'>
                    <Link href='#about'><button className='heroButton'>About</button></Link>
                    <Link href='#experience'><button className='heroButton'>Experience</button></Link>
                    <Link href='#skills'><button className='heroButton'>Skills</button></Link>
                    <Link href='#projects'><button className='heroButton'>Projects</button></Link>
                </div>
            </div>
        </div>
    )
}; 

export default Hero; 
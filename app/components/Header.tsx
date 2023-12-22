'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons'; 
import { motion } from 'framer-motion'; 

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      { /* Social Icons */ }
      <motion.div 
        initial={{
          x:-500, 
          opacity: 0, 
          scale: 1
        }}
        animate={{
          x:0, 
          opacity: 1, 
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex flex-row items-center'>
          <SocialIcon url="www.x.com" fgColor="gray" bgColor="transparent" />
          <SocialIcon url="www.github.com" fgColor="gray" bgColor="transparent" />
          <SocialIcon url="www.linkedin.com" fgColor="gray" bgColor="transparent" />
      </motion.div>
      <motion.div 
        initial={{
          x:500, 
          opacity:0, 
          scale: 1
        }}
        animate={{
          x: 0, 
          opacity: 1, 
          scale: 1
        }}
        transition={{
          duration: 1
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
          <SocialIcon 
              className="cursor-pointer" 
              network="email"
              fgColor="gray"
              bgColor="transparent"
          />
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
      </motion.div>
    </header>
  )
}

export default Header
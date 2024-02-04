'use client';
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'; 

type Inputs = {
    name: string, 
    email: string, 
    subject: string, 
    message: string 
}
type Props = {}

const ContactMe = (props: Props) => {
    const { 
        register, handleSubmit
    } = useForm(); 
    const onSubmit:SubmitHandler<Inputs> = (formdata) => { console.log(formdata)}; 

    return (
        <div className='h-screen flex relative flex-col text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

            <div className='flex flex-col spay-y-10'>
                <h4 className='text-4xl font-semibold text-center mb-8'>
                    Sounds interesting?  <span className='underline decoration-[#F7AB0A]/50'>Let's connect.</span>
                </h4>
                
                {/* <form onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} className='contactInput' placeholder='Name' type="text" />
                        <input {...register('email')} className='contactInput' placeholder='Email' type="text" />
                    </div>
                    <input {...register('subject')} className='contactInput' placeholder='Subject' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form> */}
            </div>
        </div>
    )
}

export default ContactMe
import React from 'react';
import { Button,Label, Textarea, TextInput } from "flowbite-react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const ContactPage = () => {
    return (
        <div>
            <div className='block md:flex w-11/12 mx-auto gap-10 mt-5 mb-10'>
            <div className='flex-1'>
                <h2 className='text-cyan-800 font-semibold text-xl pt-4'>Get in Touch</h2>
                <p className='leading-relaxed pt-2'>
                Have questions, need support, or want to collaborate? We’d love to hear from you! Reach out to us through the details below, and let’s work together to empower and educate young people
                </p>
                <h2 className='text-cyan-800 font-semibold text-xl pt-4'>Our Location</h2>
                <p className='leading-relaxed pt-2'>Kathandeni,Tharaka-South District,Tharaka-Nithi County,Kenya</p>
                <h2 className='text-cyan-800 font-semibold text-xl pt-4'>Call Us</h2>
                <p className='leading-relaxed pt-2'>+254 714 938280</p>
                <h2 className='text-cyan-800 font-semibold text-xl pt-4'>Email Us</h2>
                <p className='leading-relaxed pt-2'>tuongeeinitiative@gmail.com</p>
                <h2 className='text-cyan-800 font-semibold text-xl pt-4'>Follow Us</h2>
                <div className='flex flex-row gap-4 items-center pt-2'>
                    <a href='https://www.facebook.com/joel.kibara.7' target='_blank'><FaFacebook  className='text-4xl'/>
                    </a>
                    <a href='https://www.linkedin.com/in/joel-munene-21894918a/' target='_blank'><BsLinkedin  className='text-3xl'/>
                    </a>
                </div>
            </div>
            <div className='flex-1'>
                <h2 className='text-cyan-800 font-semibold text-2xl pt-4'>Let's chat!</h2>
                <form className='flex flex-col gap-4 mt-4'>
                    <div className='block md:flex gap-5'>
                        <div className='flex flex-col gap-2 flex-1'>
                        <Label htmlFor="firstName" value="First Name" />
                            <div className='flex-1'>
                            <TextInput id="firstName" type="text" placeholder="Enter your First Name" required />
                            </div>                        
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                        <Label htmlFor="lastName" value="Last Name" />
                        <div className='flex-1'>
                        <TextInput id="lastName" type="text" placeholder="Enter your Last Name" required />
                        </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="email" value="Email Address" />
                        <TextInput id="email" type="email" placeholder="Enter your email address" required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="phone" value="Phone Number" />
                        <TextInput id="phone" type="phone" placeholder="Enter your Phone Number" required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="message" value="Message" />
                        <Textarea id="email" type="email" placeholder="Hello Tuongee Initiative..." className='h-44' required />
                    </div>
                    <Button type='submit'>Submit</Button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default ContactPage;
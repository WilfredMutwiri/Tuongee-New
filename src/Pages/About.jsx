import React ,{ useState } from "react";
import {Carousel} from 'react-responsive-carousel'
import { Button, Modal } from 'flowbite-react';
import { CardComponent } from "../components/card";

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import event1 from '../assets/event1.webp'
import meeting1 from '../assets/meeting1.webp'
import meeting5 from '../assets/meeting5.webp'
import meeting2 from '../assets/meeting2.webp'
import meeting3 from '../assets/meeting3.webp'
import meeting6 from '../assets/meeting6.webp'
import meeting7 from '../assets/meeting7.webp'
import Training3 from '../assets/Training3.webp'
import Training4 from '../assets/Training3.webp'
import Training from '../assets/Training.webp'
import rural2 from '../assets/rural2.webp'
import schoolEvent from '../assets/schoolEvent.webp'

const About = () => {

    const handleJoin=()=>{
        const phoneNo="254728205891";
        const message=`Hello Gift, I visited BeachLifeFitness website and I'm interested in joining your gym.How do I proceed? Thanks.`;
        const encodedMessage=encodeURIComponent(message);
        const whatsappUrl=`https://wa.me/${phoneNo}?text=${encodedMessage}`;
        window.open(whatsappUrl,"_blank");
      }

      const aboutImages=[meeting2,meeting3,meeting6,meeting7,Training3,Training4,];
      const homeBannerImages=[event1,meeting1,meeting5,Training,rural2,schoolEvent];
    return (
        <div className='relative bg-gray-100'>
             <header className=''>
                  <div className='max-w-[1400px] h-[70px] w-full m-auto'>
                  {/* home carousel */}
                  <div>
                  <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                    {
                      homeBannerImages.map((image,index)=>(
                        <div key={index} className='max-w-[100%] h-[700px]'>
                          <img className='w-full h-[700px] object-cover' src={image} alt={`Banner ${index+1}`}/>
                        </div>
                      ))
                    }
                    </Carousel>
                      {/* Dark Background Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-50 z-10 max-w-[1400px] h-[720px] -mt-[2px] md:h-[700px] w-full m-auto"></div>
                      {/* Text Overlay */}
                  <div className="-mt-[600px] md:-mt-[600px] relative inset-0 flex flex-col justify-center items-center text-white z-10">
                      <div className='flex w-full md:w-7/12 mx-auto pt-0 md:pt-24'>
                      <div className='w-full mx-auto  z-50 p-0 md:p-3 font-bold'>
                      <div className='z-50 w-11/12 mx-auto md:w-full flex flex-col gap-2 font-serif text-4xl md:text-6xl'>
                      <h1 className='text-center font-bold pt-20 md:pt-0'>Tuongee<span className='
                       pl-4'>Initiative </span></h1>
                      </div>
                      </div>
                      </div>
                      <h2 className='z-50 relative text-center font-serif text-xl md:text-3xl pt-5 text-cyan-500'>Who We Are!</h2>
                    <div className='flex gap-5 justify-center mt-28 md:mt-10'>
                      <Button gradientDuoTone="greenToBlue" outline onClick={handleJoin}>Join Us Today</Button>
                    </div>
                  </div>
                  </div>
                  </div>
                  </header>
                  <main>
                    <section className='relative z-50 mt-[700px] '>
                        <div className="flex flex-row items-center justify-center gap-10 p-5 w-11/12 mx-auto">
                        <div className="w-[50%]">
                        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                    {
                      aboutImages.map((image,index)=>(
                        <div key={index} className='w-[100%]'>
                          <img className=' object-cover rounded-md' src={image} alt={`Banner ${index+1}`}/>
                        </div>
                      ))
                    }
                    </Carousel>
                        </div>
                            <div className="w-[50%] -mt-12 pl-4">
                                <h2 className="font-semibold text-3xl">About us</h2>
                                <p className="leading-relaxed pt-4">
                                Adolescent and young people have various needs on SRHR. Looking back to the
                                backgrounds we grew up, it’s clear that many parents and guardians are not in
                                position of providing solutions to the SRHR needs of the young people.
                                As a result, tubonge is created to eliminate this gap. This is a platform
                                that you can ask anything on SRHR and you will get a reply as soon as
                                possible.
                                </p>
                                <div className="pt-10">
                                <Button gradientDuoTone="greenToBlue" outline onClick={handleJoin}>Join Us Today</Button>
                                </div>
                            </div>
                        </div>
                    </section>
                  </main>
        </div>
    )
}

export default About;
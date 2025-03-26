import React ,{ useState } from "react";
import {Carousel} from 'react-responsive-carousel'
import { Button, Modal } from 'flowbite-react';
import { CardComponent } from "../components/card";

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import event1 from '../assets/event1.webp'
import meeting1 from '../assets/meeting1.webp'
import meeting4 from '../assets/meeting4.webp'
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



const Events = () => {

    const eventsData=[
        {
            id:1,
            name:"Youth Empowerment Workshop",
            description:"Training youths of St. Patrick Catholic Church Gatunga on the National and county government government policies of Sexual Reproductive Health Rights-SRHR",
            image:meeting4
        },
        {
            id:2,
            name:"Church leaders training",
            description:"Training various church leaders and community mobilizer on the various policies on FGM, Child Marriages and other Sexual Reproductive Health Rights-SRHR",
            image:meeting2
        },
        {
            id:3,
            name:"Consultative meeting with Tharaka-Nithi County",
            description:"Attending a consultative meeting on the actualization of the Tharakanithi County Act FGM Act of 2021",
            image:meeting5
        },
        {
            id:4,
            name:"Partnering with Plan International",
            description:"Representing wake and Shine SHG in a partnership meeting with Plan International which was aimed at coming up with an action plan on how to implement Break Free Project",
            image:meeting6
        },
        {
            id:5,
            name:"Cunsultative meeting with the Clergy",
            description:"Having a consultative meeting with pastors and Church elders on how to effectively deliver SRHR related information in churches and the community",
            image:meeting7
        }
    ]

    const handleJoin=()=>{
        const phoneNo="254714938280";
        const message=`Hello Joel Munene, I visited Tuongee Initiative  website and I'm interested in joining you.How do I proceed? Thank you.`;
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
                      <h2 className='z-50 relative text-center font-serif text-xl md:text-3xl pt-5 text-cyan-500'>Empowering  both the Youth and the Old with One Event at a Time</h2>
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
                                <h2 className="font-semibold text-3xl">~ Bringing Change Through Action ~</h2>
                                <p className="leading-relaxed pt-4">
                                At Tuongee Initiative, we believe that real change happens when people come together. Our events are designed to educate, empower, and inspire young people to take control of their futures. From awareness workshops and mentorship programs to community outreach and advocacy campaigns, every event is a step toward a world free from early marriages and teenage pregnancies. Join us in making a difference
                                </p>
                                <div className="pt-10">
                                <Button gradientDuoTone="greenToBlue" outline onClick={handleJoin}>Join Us Today</Button>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* events section */}
                    <section>
                    <div>
                        <h2 className="text-center font-semibold text-3xl pb-5 pt-10">~ Be Part of the Change! ~</h2>
                        <p className="text-center leading-relaxed">
                        At Tuongee Initiative, our events are more than just gatherings;they are opportunities to learn, share, and take action. Whether it's workshops, awareness campaigns, or community outreach, every event plays a role in shaping a better future for our youth. Explore our upcoming events and join us in making a difference!
                        </p>
                    </div>
                        <div className='block w-11/12 mx-auto md:flex gap-5 pt-10'>
                            {
                                eventsData.slice(0,3).map((item,index)=>(
                                    <CardComponent className=" " key={index} title={item.name} description={item.description} imgSrc={item.image}/>      
                                    )
                                )
                            }
                        </div>
                        <div className='block w-11/12 mx-auto md:flex gap-5 pt-10 pb-10'>
                            {
                                eventsData.slice(3).map((item,index)=>(
                                    <CardComponent className=" " key={index} title={item.name} description={item.description} imgSrc={item.image}/>      
                                    )
                                )
                            }
                        </div>
                    </section>
                  </main>
        </div>
    )
}

export default Events;
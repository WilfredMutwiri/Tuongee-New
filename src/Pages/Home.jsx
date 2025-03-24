import React ,{ useState } from "react";
import {Carousel} from 'react-responsive-carousel'
import { Modal } from 'flowbite-react';
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
import Training from '../assets/Training.webp'
import rural2 from '../assets/rural2.webp'
import schoolEvent from '../assets/schoolEvent.webp'





import { SlCalender } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import { Button, Label } from 'flowbite-react';


//   whatWeDo data
const whatWeDoData=[
    {   
        id:1,
        title:"Female Genital Mutilation Enlightenment",
        description:"FGM was built on misconceptions and they have been passed from one generation to another for many decades. It’s time to wake up and break this circle otherwise our sisters, daughters and granddaughters will continue undergoing this activity which is a violation of their human rights.",
        image:event1
    },
    {   
        id:2,
        title:"Early Pregnancies Enlightenment",
        description:"It is estimated that in the low and middle income countries there are 21 million pregnancies each year of which 50% are unintended. These pregnancies occur to adolescent ladies between the age of 15-19 years old. Most of these pregnancies ends into unsafe abortion. From the statistics it’s clear that adolescent pregnancies are a global issue though it mostly occurs in poorer and marginalised communities",
        image:meeting2
    },
    {   
        id:3,
        title:"Caution on Early Marriages",
        description:"I have grown up in a community where child marriages are a common thing. In most cases these marriages are as a result of unintended pregnancy and pressure of the ladies to prove their fertility. Most of these marriages come to an end within very short period due to continued violence within the marriage.",
        image:Training3
    }
]
//products data
const achievementsData=[
  {
    "id": 1,
    "name": "Early marriages Reduction",
    "image":meeting3,
    "desc":"Mobilised 200  community members",
},
  {
      "id": 2,
      "name": "Community Enligtment",
      "image":Training3,
      "desc":"Enligted the community on matters to do with FGM"

  },
  {
      "id": 3,
      "name": "Partnership with Plan International",
      "image":event1,
      "desc":"Partnered with Plan International in  coming up with an action plan on how to implement Break Free Project",

  },
  {
      "id": 4,
      "name": "Pastors and Church Elders Training",
      "image":meeting7,
      "desc":"Enlighting pastors and Church elders on how to effectively deliver SRHR related information in churches and the community",
  }
]

// updates data
const updatesData=[
  {
    id:1,
    name:"~Youth Training~",
    desc:"Training youths of St. Patrick Catholic Church Gatunga on the National and county government government policies of Sexual Reproductive Health Rights-SRHR",
    image:meeting3
  },
  {
    id:2,
    name:"~Church Leaders Training~",
    desc:"Training various church leaders and community mobilizer on the various policies on FGM, Child Marriages and other Sexual Reproductive Health Rights-SRHR",
    image:meeting2
  },
  {
    id:3,
    name:"~Partnering with Plan-International~",
    desc:"Representing wake and Shine SHG in a partnership meeting with Plan International which was aimed at coming up with an action plan on how to implement Break Free Project",
    image:meeting6
  }
]


const handleJoin=()=>{
  const phoneNo="254728205891";
  const message=`Hello Gift, I visited BeachLifeFitness website and I'm interested in joining your gym.How do I proceed? Thanks.`;
  const encodedMessage=encodeURIComponent(message);
  const whatsappUrl=`https://wa.me/${phoneNo}?text=${encodedMessage}`;
  window.open(whatsappUrl,"_blank");
}




export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);

  const homeBannerImages=[event1,meeting1,meeting5];
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
          <h2 className='z-50 relative text-center font-serif text-xl md:text-3xl pt-5 text-cyan-500'>Let’s Talk, Let’s Empower, Let’s Change Lives.</h2>
        <div className='flex gap-5 justify-center mt-28 md:mt-10'>
          <Button gradientDuoTone="greenToBlue" onClick={handleJoin}>Join Us Today</Button>
        </div>
      </div>
      </div>
      </div>
      </header>
      <main>
        {/* highlight section */}
        <div className='relative z-50 mt-[700px] '>
          <div className=' font-semibold w-full md:w-11/12 mx-auto flex pl-0 md:pl-12 pr-0 md:pr-10 border-r-4 md:border-r-8 border-cyan-500 border-l-4 md:border-l-8  rounded-tl-0 md:rounded-tl-[200px]  bg-gray-500 justify-between gap-2 md:gap-6'>
          <div className='border-r-8 h-full pt-8 pb-8 pr-0 md:pr-5'>
            <h2 className='font-bold text-sm md:text-3xl text-white'>Our impact <br/>In Numbers!!</h2>
          </div>
          <div className='pt-8 pb-8'>
            <h2 className='font-bold text-lg md:text-4xl text-cyan-400'>150+</h2>
            <h3 className='text-center text-sm text-white'>Members</h3>
          </div>
          <div className='pt-8 pb-8'>
            <h2 className='font-bold text-lg md:text-4xl text-cyan-400'>50+</h2>
            <h3 className='text-center text-sm text-white'>Benefitted Youth</h3>
          </div>
          <div className='pt-8 pb-8'>
            <h2 className='font-bold text-lg md:text-4xl text-cyan-400'>100+</h2>
            <h3 className='text-center text-sm text-white'>Current Programs</h3>
          </div>
          <div className='pt-8 pb-8'>
            <h2 className='font-bold text-lg md:text-4xl text-cyan-500'>100+</h2>
            <h3 className='text-center text-sm text-white'>Awaireness Campaigns</h3>
          </div>  
          </div>
        </div>
        {/* about section */}
        <section>
          <div className='relative bg-gray-100 pt-16'>
          <h2 className=' text-center font-semibold text-3xl border-b-2 border-cyan-500 w-72 items-center justify-center mx-auto'>What We Do!</h2>
            <div className='block w-11/12 mx-auto md:flex gap-5 pt-10'>

            {
                whatWeDoData.map((item,index)=>(
                    <CardComponent className="w-52 h-10 " key={index} title={item.title} description={item.description} imgSrc={item.image}/>      
                )
            )
            }

            </div>
          </div>
        </section>

        <div className=' mx-auto w-11/12 bg-gray-300 text-gray-800 mt-10 p-5 pb-8 pt-8 border-r-8 border-cyan-500 border-l-8'>
        <div>
        <p className='text-center font-semibold text-sm md:text-lg'>
            <span className="text-cyan-800">"Educating girls is not just about changing their lives—it’s about changing the world." – Malala Yousafzai<br/></span>

At Tuongee Initiative, we believe that awareness is the first step to change. Through open conversations and education, we empower youth to make informed choices and build a brighter future. 
          </p>
        </div>
        </div>


      {/* updates section */}
      <section>
      <div className='relative pt-14 pb-5'>
        <div className='flex justify-between w-11/12 mx-auto'>
        <h2 className=' text-center font-semibold text-3xl border-b-2 border-cyan-500 w-72 items-center justify-center mx-auto'>Featured Events!</h2>
        <Label className=' mt-4 justify-center cursor-pointer text-yellow-500 hover:text-blue-600 flex'><a href='/updates'>View All</a><FaArrowRight className=' text-lg pl-1'/></Label>
        </div>
        <div className='pt-14 mx-auto block md:flex gap-10 w-11/12'>

          {
            updatesData.slice(0,3).map((update,index)=>(
              <div key={index} className='flex-1 mt-6 md:mt-0 shadow-sm shadow-gray-300 bg-white rounded-md relative'>
          <img src={update.image} className="h-80 object-cover w-full rounded-md hover:transform hover:scale-95 transition duration-1000 ease-out" />   
            <h3 className='font-semibold text-cyan-600 pt-3 pb-2 p-3 text-lg'>{update.name}</h3>
            <hr className='w-10/12 mx-auto'/>
            <p className='pt-1 p-3'>{update.desc}</p>
            <div className='p-3 flex justify-between'>
          <Button className="" gradientDuoTone="cyanToBlue"><a href='#'>Read More...</a></Button>
            </div>
              </div>
            ))
          }
          </div>
          </div>
      </section>


      <div className='w-11/12 border-l-8 border-cyan-500 mt-14 border-r-8 mx-auto bg-cyan-800 text-white pt-8 pb-8 p-2'>
        <div className=''>
        <p className='text-center font-semibold text-sm md:text-lg'>
            <span className="text-gray-300">"Teenage pregnancy is not just a health issue—it’s a barrier to education, dreams, and a brighter future." – UNICEF</span><br/>
At Tuongee Initiative, we empower young people with knowledge and support to make informed choices, stay in school, and build a future full of possibilities. Let’s talk, learn, and create change together. 
          </p>
        </div>
        </div>


      {/* achievements section */}
      <section>
        <div className='pt-16 pb-10 bg-gray-100'>
        <h2 className=' text-center font-semibold text-3xl border-b-2 border-cyan-500 w-72 items-center justify-center mx-auto'>Our Achievements!</h2>

        <div className='flex justify-between w-11/12 mx-auto'>
        </div>
        <div>
        </div>
        <div className='block md:flex w-11/12 mx-auto mt-6 gap-6'>
          <div className='mt-6 w-auto md:w-6/12'>
            <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false} interval={3000}>
              {
                achievementsData.map((product,id)=>(
                <div key={id} className='bg-gray-100 mb-5 h-auto hover:scale-105 hover:transition-transform duration-300 block'>
                <div className='auto'>
                  <img src={product.image} className='h-72 w-auto md:w-52 mx-auto object-cover'/>
                </div>
                <div className='flex flex-col justify-between bg-gray-100 p-2'>
                <h2 className='font-semibold text-start'>{product.name}</h2>
                <div className='flex gap-5'>
                <h2 className='text-sm text-cyan-500'>{product.desc}</h2>
                </div>

                </div>
              </div>
              ))}
            </Carousel>
          </div>
          <div className='flex-1 pt-5 leading-relaxed'>
            <p>
            At Tuongee Initiative, we are committed to creating meaningful change by educating and empowering young people. Through community engagement, awareness programs, and strategic partnerships, we have made significant strides in addressing early marriages and teenage pregnancies.
            </p>
            <p>
                <h2 className="pt-4 pb-2 font-font-semibold">Some of our key achievements include:
                </h2>
              <ul>
                <li> Mobilized Communities Against Harmful Practices</li>
                <li> Empowered Over 200 Youth Through Training Programs </li>
                <li>Partnered with Schools to Keep Girls in Education</li>
              </ul>
            </p>
            <a href='/products'>
            <h2 className='bg-cyan-400 p-2 w-48 rounded-md shadow-sm text-center font-semibold text-gray-800 mt-10 flex gap-2 mx-auto md:mx-0'>Join us Today<span className="text-orange-800 text-2xl justify-center items-center"><IoArrowForwardCircleOutline/></span></h2></a>
          </div>
        </div>

        </div>
      </section>
      <div className='bg-gray-900 w-11/12 border-cyan-500 border-r-8 border-l-8 text-white p-5 mx-auto pt-8 pb-8'>
        <div>
        <p className='leading-relaxed text-sm md:text-lg'>
        <span className="text-cyan-400">"A girl’s future should be defined by her dreams, not by an unplanned pregnancy." – Tuongee Initiative</span><br/>
        At Tuongee Initiative, we equip young people with knowledge, support, and opportunities to make informed choices—ensuring that education and ambition come first. Let’s talk, learn, and build a future full of possibilities.
        </p>
        </div>
      </div>
      {/* blogs section */}
      <section>
        <div>
        <div className='flex justify-between w-11/12 mx-auto mt-10'>
        <h2 className=' text-center font-semibold text-3xl border-b-2 border-cyan-500 w-72 items-center justify-center mx-auto'>Our Blogs!</h2>
        <a href="#">
        <Label className=' mt-4 justify-center cursor-pointer text-yellow-500 hover:text-blue-600 flex'>View All <FaArrowRight className=' text-lg pl-1'/></Label>
        </a>
        </div>
        {/* available on large devices */}
        <div className='hidden md:flex flex-row gap-6 w-11/12 mx-auto pt-10 pb-10'>

          <div className='flex-1'>
            <img src={schoolEvent} className='h-96 w-full object-cover' alt='waterfall image'/>
            <div className='p-5 bg-gray-900 block justify-between '>
              <p className='text-cyan-500 font-semibold text-lg'>Why Girl Child Education is the Key to a Brighter Future</p>
              <Label className='text-yellow-500 p-1 cursor-pointer hover:text-blue-500' onClick={() => setOpenModal(true)}>Read more...</Label>
            </div>
          </div>

          <div className='flex-1'>
            <img src={rural2} className='h-96 w-full object-cover' alt='viewWaterfall image'/>
            <div className='p-5 bg-gray-900 block justify-between '>
              <p className='text-cyan-500 font-semibold text-lg'>From Awareness to Action: The Power of Community Enlightenment</p>
              <Label className='text-yellow-500 p-1 cursor-pointer hover:text-blue-500' onClick={() => setOpenModal2(true)}>Read more...</Label>
            </div>
          </div>

          <div className='flex-1'>
            <img src={Training} className='h-96 w-full object-cover' alt='droneWaterfall image'/>
            <div className='p-5 bg-gray-900 block justify-between '>
              <p className='text-cyan-500 font-semibold text-lg'>The Harsh Reality of Early Marriages and How We Can Stop It</p>
              <Label className='text-yellow-500 p-1 cursor-pointer hover:text-blue-500' onClick={() => setOpenModal3(true)}>Read more...</Label>
            </div>
          </div>
        </div>
        </div>
        {/* available on small devices */}
        <div className='lg:hidden w-11/12 mx-auto mt-6'>
        <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false} interval={3000}>

        <div className='flex-1'>
            <img src={schoolEvent} className='h-96 w-full object-cover' alt='waterfall image'/>
            <div className='p-5 bg-gray-900 block justify-between '>
              <p className='text-cyan-500 font-semibold text-lg'>Why Girl Child Education is the Key to a Brighter Future</p>
              <Label className='text-yellow-500 p-1 cursor-pointer hover:text-blue-500' onClick={() => setOpenModal(true)}>Read more...</Label>
            </div>
          </div>

          <div className='flex-1'>
            <img src={rural2} className='h-96 w-full object-cover' alt='viewWaterfall image'/>
            <div className='p-5 bg-gray-900 block justify-between '>
              <p className='text-cyan-500 font-semibold text-lg'>From Awareness to Action: The Power of Community Enlightenment</p>
              <Label className='text-yellow-500 p-1 cursor-pointer hover:text-blue-500'onClick={() => setOpenModal2(true)}>Read more...</Label>
            </div>
          </div>

          <div className='flex-1'>
            <img src={Training} className='h-96 w-full object-cover' alt='droneWaterfall image'/>
            <div className='p-5 bg-gray-900 block justify-between '>
              <p className='text-cyan-500 font-semibold text-lg'>The Harsh Reality of Early Marriages and How We Can Stop It</p>
              <Label className='text-yellow-500 p-1 cursor-pointer hover:text-blue-500' onClick={() => setOpenModal3(true)}>Read more...</Label>
            </div>
          </div>
    </Carousel>
        </div>

        {/* modals */}
        <div>
          {/* modal1 */}
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Why Girl Child Education is the Key to a Brighter Future</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Education is more than just learning—it’s empowerment. When a girl receives an education, she is more likely to break the cycle of poverty, make informed life choices, and contribute positively to society. However, millions of girls still face barriers like early marriages, financial constraints, and cultural norms that limit their access to education. In this blog, we explore the importance of girl child education, the challenges faced, and how we can collectively create opportunities for every girl to thrive.
            </p>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
      {/* modal2 */}
      <div>
      <Modal show={openModal2} onClose={() => setOpenModal2(false)}>
        <Modal.Header> From Awareness to Action: The Power of Community Enlightenment</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            A well-informed community is a transformed community. Awareness is the first step toward change, and when people understand the consequences of harmful practices like early marriages and teenage pregnancies, they become part of the solution. This blog highlights the role of community education in shifting mindsets, promoting gender equality, and fostering an environment where young people can pursue their dreams without limitations.
            </p>
  
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal2(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
      {/* modal3 */}
      <div>
      <Modal show={openModal3} onClose={() => setOpenModal3(false)}>
        <Modal.Header>The Harsh Reality of Early Marriages and How We Can Stop It</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Every year, millions of young girls are forced into early marriages, robbing them of their childhood, education, and future aspirations. While some view it as tradition, the consequences are severe—ranging from health risks to economic instability. This blog delves into the root causes of early marriages, real-life stories of survival, and the collective efforts needed to end this practice for good.
            </p>
            
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal3(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
        </div>
      </section>
      </main>
    </div>
  )
}
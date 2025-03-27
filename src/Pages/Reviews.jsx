import React ,{ useState,useEffect} from "react";
import {Carousel} from 'react-responsive-carousel'
import { Button, Label, Modal, Spinner, Textarea, TextInput } from 'flowbite-react';

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
import { SERVER_URI } from "../Constants/SERVER_URI";

const Reviews = () => {

    const [reviews,setReviews]=useState([]);
    const [loading,setLoading]=useState(true);
    const [isError,setError]=useState(false);
    const [ModalOpen,setModalOpen]=useState(false);
    const [formData,setFormData]=useState({
        fullName:"",
        topic:"",
        reviewContent:""
    })

    const handleTextChange=(e)=>{
        setFormData({
            ...formData,[e.target.name]:e.target.value
        });
    }
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            setLoading(true)
            const review=formData;
            const response=await fetch(`${SERVER_URI}/api/reviews/addReview`,{
                method:"POST",
                body:JSON.stringify(review),
                headers:{
                    "Content-Type":"application/json",
                }
            });
            setLoading(false)
            if(!response.ok){
                setError(true)
            }
            if(response.ok){
                setModalOpen(false);
                window.location.reload();
            }

        } catch (error) {
            console.log(error);
            setError(true)
        }

    }
    useEffect(()=>{
        const fetchReviews = async () => {
            try {
                setLoading(true)
                const response = await fetch(`${SERVER_URI}/getReviews`,{
                    method:"GET",
                    headers:{
                        "Content-Type":"Application/json",
                    }
                });
                if (!response.ok) {
                    console.log("Failed to fetch reviews", response);
                    setError(true);
                    setLoading(false)
                }
                const data = await response.json();
                setReviews(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching reviews:", error);
                setError(true);
                setLoading(false)
            }
        };
    
        fetchReviews();
        console.log("hello");
    },[])

    const handleJoin=()=>{
        const phoneNo="254714938280";
        const message=`Hello Joel Munene, I visited Tuongee Initiative  website and I'm interested in joining you.How do I proceed? Thank you.`
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
                      <h2 className='z-50 relative text-center font-serif text-xl md:text-3xl pt-5 text-cyan-500'>Let us know what you think!
                      </h2>
                    <div className='flex gap-5 justify-center mt-28 md:mt-10'>
                      <Button gradientDuoTone="greenToBlue" outline onClick={()=>setModalOpen(true)}>Leave us a Review</Button>
                    </div>
                  </div>
                  </div>
                  </div>
                  </header>
                  <main>
                    <section  className="relative z-50 mt-[700px] pb-10">
                    <div className="flex justify-between w-11/12 mx-auto mb-5">
                        <h2 className="text-center text-2xl font-semibold">What our users have to say...</h2>
                        <Button onClick={()=>setModalOpen(true)}>Leave a review</Button>
                    </div>

                        {/* reviews section */}
                        {/* loading */}
                            {
                                loading &&(
                                <div className="w-60 mx-auto"><Spinner/><span className="text-sm pl-2 text-cyan-600"> Loading reviews ... </span></div>
                                )
                            }
                        <div className='w-11/12 mx-auto bg-gray-50'>
                            {
                                reviews?(
                                <div>
                                    {
                                        reviews.map((review,index)=>(
                                            <div key={index} className="border p-4 my-2  rounded-md shadow mb-4">
                                                <h3><span className="text-cyan-500 font-semibold pr-2">Name:</span> {review.fullName}</h3>
                                                <h3><span className="text-cyan-500 font-semibold pr-2">Topic:</span> {review.topic}</h3>
                                                <h3><span className="text-cyan-500 font-semibold pr-2">Message:</span> {review.reviewContent}</h3>
                                            </div>
                                        ))
                                    }
                                </div>):(
                                    <div>
                                        <h1 className="text-cyan-600 text-center font-semibold bg-gray-100">No available reviews</h1>
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            {
                                isError && (
                                <div className=" bg-red-100 p-2 w-8/12 mx-auto rounded-md border-2">
                                    <h2 className="text-center text-red-600">An error occured.Please check your internet connection and try again...</h2>
                                </div>)
                            }
                        </div>
                        {/* modal section */}
                        <Modal
                        show={ModalOpen}
                        onClose={()=>setModalOpen(false)}
                        >
                            <Modal.Header>Leave us a review</Modal.Header>
                            <Modal.Body>
                                {
                                    isError && (
                                        <div className="bg-red-50 p-2 rounded-md border-2 w-10/12 mx-auto mb-2">
                                            <h2 className="text-red-600 text-sm text-center">An error occured. Please try again...</h2>
                                        </div>
                                    )
                                }
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-col gap-2">
                                        <Label>Full Name</Label>
                                        <TextInput
                                        placeholder="Your full name"
                                        type="text"
                                        onChange={handleTextChange}
                                        name="fullName"
                                        required
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2 pt-4">
                                        <Label>Topic</Label>
                                        <TextInput
                                        placeholder="Early Marriages"
                                        type="text"
                                        onChange={handleTextChange}
                                        name="topic"
                                        required
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2 pt-4">
                                        <Label>Review</Label>
                                        <Textarea
                                        className="h-32"
                                        placeholder="Enter your review message here"
                                        type="text"
                                        onChange={handleTextChange}
                                        name="reviewContent"
                                        required
                                        />
                                    </div>

                                    <div>
                                        <Button className="w-10/12 mx-auto mt-4" type="submit" disabled={loading}>{
                                            loading ?(
                                            <div><Spinner/> Submitting review ...</div>
                                        ):(
                                            <h2>Submit</h2>)
                                        }
                                        </Button>
                                    </div>
                                </form>
                            </Modal.Body>
                        </Modal>
                    </section>
                  </main>
        </div>
    )
}

export default Reviews;
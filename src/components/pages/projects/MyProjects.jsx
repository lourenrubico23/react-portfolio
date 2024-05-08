import React from 'react'
import Header from '../../partials/header/Header'
import Socials from '../../partials/Socials'
import { baseImgUrl } from '../../helpers/functions-general'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Footer from '../../partials/footer/Footer'

const MyProjects = () => {
  return (
    <>
    <Header/>
    <Socials/>

   
        <div className="myprojects pt-[100px] text-lightcolor" >
            <div className='project__wrapper container py-20 '>
                <div className=" grid grid-cols-2 justify-center items-center" id='project1'>
                    <div className="project__content">
                        <h1 className='text-7xl leading-[3.8rem] uppercase mb-10'>Nature smile <br />Dental clinic</h1>
                        <p className='w-[80%] mb-10'>A platform designed for both clients and the clinic enables clients to conveniently schedule their appointments online. Nature Smile's administrative team can efficiently manage client appointments in real-time through the website, ensuring a seamless process for all parties involved.</p>
                    </div>
                <img src={`${baseImgUrl}/card1.png`} alt="" className='size-full ' />
                </div>
            <a href="#project2" className=''><span><MdOutlineKeyboardArrowRight className='text-7xl font-thicker text-buttons mx-auto rotate-90 my-20' /></span></a>
            </div>
        
      
            <div className='project__wrapper container py-20 text-lightcolor'>
                <div className=" grid grid-cols-2 justify-center items-center" id='project2'>
                    <div className="project__content">
                        <h1 className='text-7xl leading-[3.8rem] uppercase mb-10'>Shoes ni <br />Sabel</h1>
                        <p className='w-[80%] mb-10'>An e-commerce platform dedicated to showcasing the Filipino pride in shoe craftsmanship and design, this website celebrates the rich heritage and tradition of shoe making in the Philippines. Through a curated collection of footwear, customers are invited to explore and purchase shoes that embody the unique craftsmanship and cultural identity of Filipino shoemakers.</p>   
                    </div>
                    <img src={`${baseImgUrl}/card2.png`} alt="" className='size-full' />
                </div>
                <a href="#project3" className=''><span><MdOutlineKeyboardArrowRight className='text-7xl font-thicker text-buttons mx-auto rotate-90 my-20' /></span></a>
            </div>
            
            <div className='project__wrapper container py-20 text-lightcolor'>
                <div className=" grid grid-cols-2 justify-center items-center" id='project3'>
                    <div className="project__content">
                        <h1 className='text-7xl leading-[3.8rem] uppercase mb-10'>Shoes ni <br />Sabel</h1>
                        <p className='w-[80%] mb-10'>An e-commerce platform dedicated to showcasing the Filipino pride in shoe craftsmanship and design, this website celebrates the rich heritage and tradition of shoe making in the Philippines. Through a curated collection of footwear, customers are invited to explore and purchase shoes that embody the unique craftsmanship and cultural identity of Filipino shoemakers.</p>   
                    </div>
                    <img src={`${baseImgUrl}/card3.png`} alt="" className='size-full' />
                </div>
            </div>
        </div>  
        
    <Footer/>
    
        
    
    
    </>
  )
}

export default MyProjects

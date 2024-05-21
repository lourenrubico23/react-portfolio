import React, { useEffect } from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaEnvelopeOpen, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Aos from "aos"
import 'aos/dist/aos.css'

const Socials = () => {
  useEffect(() => {
    Aos.init();
  },[])

  return (
    <aside className='px-[150px] py-[400px] w-[50px] h-screen fixed right-0 top-[80px] z-50'>
      <div className="container">
        <ul className='nav flex flex-col justify-center items-center gap-4 '>
            <li className='nav-link-social' data-aos="fade-up" data-aos-duration="500"><Link to="https://www.facebook.com/profile.php?id=100008500301957"><FaFacebook className='text-[1.7rem] text-darkcolor hover:text-lightcolor' /></Link></li>
            <li className='nav-link-social' data-aos="fade-up" data-aos-duration="1000"><Link to="https://www.linkedin.com/in/louren-isobel-rubico-0a78a8218/"><FaLinkedin className='text-[1.7rem] text-darkcolor hover:text-lightcolor' /></Link></li>
            <li className='nav-link-social' data-aos="fade-up" data-aos-duration="1500"><Link to="https://www.instagram.com/isobelllyy/"><AiFillInstagram className='text-[1.7rem] text-darkcolor hover:text-lightcolor' /></Link></li>
            <li className='nav-link-social' data-aos="fade-up" data-aos-duration="2000"><Link to="#"><FaEnvelopeOpen className='text-[1.7rem] text-darkcolor hover:text-lightcolor' /></Link></li>
        </ul>
      </div>
        
    </aside>
  )
}

export default Socials

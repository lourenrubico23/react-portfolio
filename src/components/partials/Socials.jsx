import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaEnvelopeOpen, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Socials = () => {
  return (
    <aside className='px-[150px] py-[400px] w-[50px] h-screen fixed right-0 top-[80px] z-50'>
      <div className="container">
        <ul className='nav flex flex-col justify-center items-center gap-4 '>
            <li className='nav-link-social'><Link to="#"><FaFacebook className='text-[1.7rem] text-darkcolor hover:text-lightcolor' /></Link></li>
            <li className='nav-link-social'><Link to="#"><FaLinkedin className='text-[1.7rem] text-darkcolor hover:text-lightcolor' /></Link></li>
            <li className='nav-link-social'><Link to="#"><AiFillInstagram className='text-[1.7rem] text-darkcolor hover:text-lightcolor' /></Link></li>
            <li className='nav-link-social'><Link to="#"><FaEnvelopeOpen className='text-[1.7rem] text-darkcolor hover:text-lightcolor' /></Link></li>
        </ul>
      </div>
        
    </aside>
  )
}

export default Socials

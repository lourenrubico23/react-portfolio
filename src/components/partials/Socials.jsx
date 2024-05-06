import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaEnvelopeOpen, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Socials = () => {
  return (
    <aside className='px-[150px] py-[400px] w-[50px] h-screen fixed right-0 top-[80px] z-50'>
        <ul className='nav flex flex-col justify-center items-center gap-4'>
            <li className='nav-link'><Link to="#"><FaFacebook className='text-3xl text-darkcolor' /></Link></li>
            <li className='nav-link'><Link to="#"><FaLinkedin className='text-3xl text-darkcolor' /></Link></li>
            <li className='nav-link'><Link to="#"><AiFillInstagram className='text-3xl text-darkcolor' /></Link></li>
            <li className='nav-link'><Link to="#"><FaEnvelopeOpen className='text-3xl text-darkcolor' /></Link></li>
        </ul>
    </aside>
  )
}

export default Socials

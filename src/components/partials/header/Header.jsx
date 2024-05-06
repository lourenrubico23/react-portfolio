import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='py-3 px-[150px] bg-primary min-w-[1440px] w-full mx-auto fixed z-50'>
        <div className="header__wrapper flex justify-between items-center ">
            <img src={`${baseImgUrl}/logo.svg`} alt="" className='size-[60px]'  />

            <div className="navs flex gap-5 uppercase">
                <Link to="#" className='hover:text-buttons p-1'>Home</Link>
                <Link to="#" className='hover:text-buttons p-1'>About Me</Link>
                <Link to="#" className='hover:text-buttons p-1'>Projects</Link>
                <Link to="#" className='btn btn-header'>Contact Me</Link>  
            </div>
        </div>
    </header>
  )
}

export default Header

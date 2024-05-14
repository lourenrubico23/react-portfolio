import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight, FaDownload, FaEnvelopeOpen, FaGraduationCap, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineFileDownload, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { BsSend } from 'react-icons/bs'
import Socials from '../../../../partials/Socials'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import Header from '../../../../partials/header/Header'
import { baseImgUrl } from '../../../../helpers/functions-general'
import Footer from '../../../../partials/footer/Footer'

const Home = () => {

    
  return (
    <>
    
        <Header/>
        <Socials/>
    

    <div className="banner pt-[100px] container text-lightcolor">
        <div className="banner__wrapper grid grid-cols-2 justify-center items-center">
            <img src={`${baseImgUrl}/pichome.svg`} alt="" className='size-[800px]' />
            <div className="banner__content">
                <h1 className='text-7xl leading-[3.8rem] uppercase mb-10'>Louren <br /> Isobel <br />Rubico</h1>
                <h3 className='w-[500px] mb-10'>I specialize in creating clean and user-friendly experiences as a web developer and front-end developer from the Philippines.
My life's work is creating high-quality software that makes a positive impact on the people around me.</h3>
                <a href="/about" className="btn2 btn-home uppercase"><span className='iconround p-3 bg-btncircle rounded-full'><MdOutlineKeyboardArrowRight className='text-2xl font-thicker text-darkcolor' /></span>more about me</a>
            </div>
        </div>
    </div>
 
    <AboutMe/>

    <Projects/>

    <Contact/>
    
    <Footer/>


    </>
  )
}
                    

export default Home

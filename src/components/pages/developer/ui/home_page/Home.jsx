import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight, FaDownload, FaEnvelopeOpen, FaGraduationCap, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineFileDownload, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { BsSend } from 'react-icons/bs'
import Socials from '../../../../partials/Socials'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import Header from '../../../../partials/header/Header'
import { baseImgUrl, devBaseImgUrl } from '../../../../helpers/functions-general'
import Footer from '../../../../partials/footer/Footer'
import useQueryData from '../../../../custom-hooks/useQueryData'
import Aos from "aos"
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    Aos.init();
  },[])

  const {
    isLoading,
    isFetching,
    error,
    data: homeBanner,
  } = useQueryData(
      "/v1/homeBanner", // endpoint
     "get", // method
   "homeBanner", // key
  
  );
    
  return (
    <>
    
        <Header/>
        <Socials/>
    
    {homeBanner?.data.map((item, key) => (
      <div className="banner pt-[150px] container text-lightcolor h-screen" key={key}>
        <div className="banner__wrapper grid grid-cols-2 justify-center items-center">
            <img src={`${devBaseImgUrl}/${item.homeBanner_image}`} alt="" className='size-[800px]' data-aos='fade-right' data-aos-duration="1000" />
            <div className="banner__content"data-aos='fade-left' data-aos-duration="1000">
                <h1 className='text-7xl leading-[3.8rem] uppercase mb-10' >Louren <br /> Isobel <br />Rubico</h1>
                <h3 className='w-[500px] mb-10'>{item.homeBanner_description}</h3>
                <a href="/about" className="btn2 btn-home uppercase" ><span className='iconround p-3 bg-btncircle rounded-full'><MdOutlineKeyboardArrowRight className='text-2xl font-thicker text-darkcolor' /></span>more about me</a>
            </div>
        </div>
    </div>
    ))}
    
 
    <AboutMe/>

    <Projects/>

    <Contact/>
    
    <Footer/>


    </>
  )
}
                    

export default Home

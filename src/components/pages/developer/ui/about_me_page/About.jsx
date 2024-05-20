import React from 'react'
import Header from '../../../../partials/header/Header'
import { baseImgUrl, devBaseImgUrl } from '../../../../helpers/functions-general'
import { MdOutlineFileDownload, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Socials from '../../../../partials/Socials'
import { FaGraduationCap } from 'react-icons/fa'
import Footer from '../../../../partials/footer/Footer'
import { StoreContext } from '../../../../../store/StoreContext'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching'
import useQueryData from '../../../../custom-hooks/useQueryData'
import Skills from '../home_page/Skills'
import Education from './Education'

const About = () => {

      const {
        isLoading,
        isFetching,
        error,
        data: aboutme, aboutBanner
      } = useQueryData(
          "/v1/aboutme", "/v1/skills", "/v1/aboutBanner", // endpoint
         "get", // method
       "aboutme", "skills", "aboutBanner" // key
      
      );

  return (
    <>
    <Header/>
    <Socials/>


    <div className="banner pt-[100px] h-full bg-primary text-lightcolor py-[5rem]">
        
        <div className="banner__wrapper grid grid-cols-[.4fr,1fr] items-center container" >
          <div className="banner__content" >             
            <h1 className='text-7xl leading-[3.8rem] uppercase mb-20 '>About <br /> Me</h1>
            <h2 className='text-3xl'>I am Louren Isobel Rubico</h2>
            <p className='w-[600px] mb-10'>A Filipino web designer and front-end developer based in the Philippines, I bring a unique blend of cultural insight, creativity, and technical expertise to every project I undertake. With a deep understanding of both local and global design trends, I strive to create visually stunning and user-friendly websites that resonate with diverse audiences.</p>
            <Education/>
          </div>
          <img src={`${baseImgUrl}/picabout.svg`} alt="" className='-translate-x-[50px]' />
        </div>
    </div>
  

    <section className='skills bg-primary'>
        <div className="container border-t-[1px] border-line border-accent/50 pb-[100px]">
           <Skills/>
        </div>
        
    </section>

    <Footer/>
    </>
  )
}

export default About

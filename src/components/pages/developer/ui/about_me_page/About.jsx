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

const About = ({item}) => {
    const {store,dispatch} = React.useContext(StoreContext)

    const onButtonClick = () => {
        const pdfUrl = "CV_Rubico.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CV_Rubico.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };


      const {
        isLoading,
        isFetching,
        error,
        data: aboutme, skills
      } = useQueryData(
          "/v1/aboutme", "/v1/skills", // endpoint
         "get", // method
       "aboutme", "skills" // key
      
      );

  return (
    <>
    <Header/>
    <Socials/>

    <div className="banner pt-[100px] h-full bg-primary text-lightcolor py-[5rem]">
        <div className="banner__wrapper grid grid-cols-[.4fr,1fr] items-center container">
            
            {isLoading ? (<SpinnerFetching/>) : (
                <div className="banner__content" >
                    
                <h1 className='text-7xl leading-[3.8rem] uppercase mb-20 '>About <br /> Me</h1>
                <h2 className='text-3xl'>I am Louren Isobel Rubico</h2>
                <p className='w-[600px] mb-10'>A Filipino web designer and front-end developer based in the Philippines, I bring a unique blend of cultural insight, creativity, and technical expertise to every project I undertake. With a deep understanding of both local and global design trends, I strive to create visually stunning and user-friendly websites that resonate with diverse audiences.</p>
                {aboutme?.data.map((item, key) => (
                        <div className="educards" key={key}>
                    <div className="educard grid grid-cols-[.5fr,3fr]">
                        <span className='p-2 bg-btncircle border-[1px] border-buttons rounded-full w-[50px] h-[50px]'><FaGraduationCap className='text-3xl text-darkcolor mx-auto'/></span>
                        <div className="cardinfo">
                            <h4>{item.aboutme_startYear}-{item.aboutme_endYear}</h4>
                            <p>{item.aboutme_course}</p>
                            <p className='mb-5'>{item.aboutme_school}</p>
                        </div>
                    </div>
                </div>
                    )) }
                
                <div className="banner__button flex justify-between py-10">
                   <a href="/CV_Rubico.pdf"  className="btn2 btn-home uppercase" onClick={onButtonClick} ><span className='iconround p-3 bg-btncircle rounded-full'><MdOutlineFileDownload className='text-2xl font-thicker text-darkcolor' /></span>download cv</a> 
                   <a href="" className="btn2 btn-home uppercase"><span className='iconround p-3 bg-btncircle rounded-full'><MdOutlineKeyboardArrowRight className='text-2xl font-thicker text-darkcolor' /></span>view projects</a>
                </div>
                
            </div>
            )}
            
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

import React from 'react'
import Header from '../../../../partials/header/Header'
import Socials from '../../../../partials/Socials'
import { baseImgUrl, devBaseImgUrl } from '../../../../helpers/functions-general'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Footer from '../../../../partials/footer/Footer'
import useQueryData from '../../../../custom-hooks/useQueryData'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching'

const MyProjects = () => {


    const {
        isLoading,
        isFetching,
        error,
        data: projects,
      } = useQueryData(
          "/v1/projects", // endpoint
         "get", // method
       "projects", // key
      
      );


  return (
    <>
    <Header/>
    <Socials/>

    {isLoading ? (<SpinnerFetching/>) : (
       <div>

            {projects.data.map((item,key) => (
                <div className="myprojects text-lightcolor" key={key} >

            <div className='project__wrapper container '>
               
                    <div className=" grid grid-cols-2 justify-center items-center pt-[200px] order-1" id='project1'>
                        <div className="project__content">
                            <h1 className='text-7xl leading-[3.8rem] uppercase mb-10'>{item.projects_title}</h1>
                            <p className='w-[80%] mb-10'>{item.projects_description}</p>
                        </div>
                        <img src={`${devBaseImgUrl}/${item.projects_image}`} alt="" className='size-full' />
                    </div>
                
            <a href="#project2" className='scroll-smooth'><span><MdOutlineKeyboardArrowRight className='text-7xl font-thicker text-buttons mx-auto rotate-90 my-20 ' /></span></a>
            </div>
        
      
            
        </div> 
            ))}
  
        
         </div>  
    )}
   
        
    <Footer/>
    
        
    
    
    </>
  )
}

export default MyProjects

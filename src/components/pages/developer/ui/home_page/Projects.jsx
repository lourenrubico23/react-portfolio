import React, { useEffect } from 'react'
import { baseImgUrl, devBaseImgUrl } from '../../../../helpers/functions-general'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching';
import useQueryData from '../../../../custom-hooks/useQueryData';
import Aos from "aos"
import 'aos/dist/aos.css'

const Projects = () => {
    useEffect(() => {
        Aos.init();
      },[])

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
    <section className="projects py-[5rem]">
        {isLoading ? (<SpinnerFetching/>) : (
           <div className="container">
        <h1 className='text-7xl opacity-[16%] text-primary text-center uppercase'>Works</h1>
        <h2 className='uppercase text-3xl text-center -translate-y-[60px] text-lightcolor'>Projects</h2>
            <div className="projects__wrapper mb-10 flex flex-cols-3 gap-5  w-[full] mx-auto">

                    {projects?.data.map((item,key) => (
                      <div className="card rounded-[1rem] bg-lightcolor overflow-hidden mx-auto" data-aos="zoom-in" data-aos-duration="1000" key={key}>
                        <div className="card-img">
                            <div className="content text-darkcolor p-7">
                                <h3>{item.projects_title}</h3>
                                <small>Web Design</small>
                                <p className='line-clamp-3'>{item.projects_description}</p>
                            <a href="" className='text-buttons hover:text-btncircle'>Read more..</a> 
                            </div>
                            
                        </div>
                        <div className="card-description ">
                            <img src={`${devBaseImgUrl}/${item.projects_image}`} alt="" className='card__img rounded-[1rem] ' />     
                        </div>
                    </div>   
                    ))}
                    

            </div>
        </div> 
        )}
        
    </section>
  )
}

export default Projects

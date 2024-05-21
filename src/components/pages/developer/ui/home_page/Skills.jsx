import React, { useEffect } from 'react'
import useQueryData from '../../../../custom-hooks/useQueryData';
import { devBaseImgUrl } from '../../../../helpers/functions-general';
import Aos from "aos"
import 'aos/dist/aos.css'

const Skills = () => {
  useEffect(() => {
    Aos.init();
  },[])

    const {
        isLoading,
        isFetching,
        error,
        data: skills
      } = useQueryData(
         "/v1/skills", // endpoint
         "get", // method
        "skills" // key
      
      );

  return (
    <>
    
    <h3 className='uppercase text-white mt-[80px] mb-[100px] text-center'>skills</h3>

            <div className="flex gap-10 justify-around w-full py-10 text-lightcolor" >
                 {skills?.data.map((item, key) => (
                <div className="skills text-center inline-block" key={key}>
                    <img src={`${devBaseImgUrl}/${item.skills_image}`} alt="" className='size-[100px] mx-auto object-contain' data-aos="fade-down" data-aos-duration="1000" />
                    <h4 className='uppercase mt-3' c>{item.skills_title}</h4>
                </div>
                ))}
            </div>
           
        
        
     </>     
         
  )
}

export default Skills

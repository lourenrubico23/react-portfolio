import React from 'react'
import useQueryData from '../../../../custom-hooks/useQueryData';
import { devBaseImgUrl } from '../../../../helpers/functions-general';

const Skills = () => {

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
                    <img src={`${devBaseImgUrl}/${item.skills_image}`} alt="" className='size-[100px] mx-auto object-contain' />
                    <h4 className='uppercase mt-3'>{item.skills_title}</h4>
                </div>
                ))}
            </div>
           
        
        
     </>     
         
  )
}

export default Skills

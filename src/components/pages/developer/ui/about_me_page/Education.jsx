import React from 'react'
import useQueryData from '../../../../custom-hooks/useQueryData';
import { MdOutlineFileDownload, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {


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
        data: aboutme,
      } = useQueryData(
          "/v1/aboutme", // endpoint
         "get", // method
       "aboutme", // key
      
      );

  return (
    <>
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
   <a href="/project" className="btn2 btn-home uppercase"><span className='iconround p-3 bg-btncircle rounded-full'><MdOutlineKeyboardArrowRight className='text-2xl font-thicker text-darkcolor' /></span>view projects</a>
</div>
</>
  )
}

export default Education

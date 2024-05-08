import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'
import { FaGraduationCap } from 'react-icons/fa'
import { MdOutlineFileDownload } from 'react-icons/md'

const AboutMe = () => {

    const onButtonClick = () => {
        const pdfUrl = "CV_Rubico.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CV_Rubico.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

  return (
    <section className="aboutme bg-primary py-[5rem] text-lightcolor">
        <h1 className='text-7xl opacity-5 text-accent text-center uppercase'>Resume</h1>
        <h2 className='uppercase text-3xl text-center -translate-y-[60px]'>About me</h2>
        <div className="container">
            <div className="aboutme__wrapper">
                <h3 className='uppercase text-buttons mb-[80px]'>Personal info</h3>

                <div className="about flex flex-col-2 gap-10">

                    <div className="info flex flex-col-2 gap-[5rem] h-full">
                        <div className="right flex flex-col-2 gap-10">
                            <ul className="name ">
                                <li className='mb-8'><small className='text-[.9rem]'>First name: </small></li>
                                <li className='mb-8'><small className='text-[.9rem]'>Age: </small></li> 
                                <li className='mb-8'><small className='text-[.9rem]'>Freelance: </small></li>
                                <li className='mb-8'><small className='text-[.9rem]'>Phone: </small></li>
                                <li className='mb-8'><small className='text-[.9rem]'>Language: </small></li>
                            </ul>
                            <ul className="answer">
                                <li className='mb-[2.4rem]'><p className='font-thick'> Louren Isobel</p></li>
                                <li className='mb-[2.4rem]'><p className='font-thick'>23</p></li>
                                <li className='mb-[2.4rem]'><p className='font-thick'> Available</p></li>
                                <li className='mb-[2.4rem]'><p className='font-thick'> +639174278410</p></li>
                                <li className='mb-[2.4rem]'><p className='font-thick'> Filipino & English</p></li>
                            </ul>
                            
                        </div>

                        <div className="left flex flex-col-2 gap-10">
                            <ul className='name'>
                                <li className='mb-8'><small className='text-[.9rem]'>Last name: </small></li>
                                <li className='mb-8'><small className='text-[.9rem]'>Nationality: </small></li>
                                <li className='mb-8'><small className='text-[.9rem]'>Address: </small></li>
                                <li className='mb-8'><small className='text-[.9rem]'>Email: </small></li>
                                <li className='mb-8'><small className='text-[.9rem]'>LinkedIn: </small></li>
                            </ul>
                            <ul className='answer'>
                                <li className='mb-[2.4rem]'><p className='font-thick'> Rubico</p></li>
                                <li className='mb-[2.4rem]'><p className='font-thick'> Filipino</p></li>
                                <li className='mb-[2.4rem]'><p className='font-thick'> Brgy. Bulakin 1 Dolores, Quezon</p></li>
                                <li className='mb-[2.4rem]'><p className='font-thick'> lourenisobel18@gmail.com</p></li>
                                <li className='mb-[2.4rem]'><p className='font-thick'> lourenisobel</p></li>
                            </ul>
                            
                        </div>
                    </div>

                    <div className="cards flex flex-wrap justify-center gap-5 text-lightcolor ">
                        <div className="experience bg-cardsblue w-[170px] h-[170px] flex flex-col items-center p-4">
                            <h2 className='text-3xl'>1+</h2>
                            <p className='text-white'>Years of Experience</p>
                        </div>
                        <div className="experience bg-cardsblue w-[170px] h-[170px] flex flex-col items-center p-4">
                            <h2 className='text-3xl'>1+</h2>
                            <p className='text-white'>Years of Experience</p>
                        </div>
                        <div className="experience bg-cardsblue w-[170px] h-[170px] flex flex-col items-center p-4">
                            <h2 className='text-3xl'>1+</h2>
                            <p className='text-white'>Years of Experience</p>
                        </div>
                        <div className="experience bg-cardsblue w-[170px] h-[170px] flex flex-col items-center p-4">
                            <h2 className='text-3xl'>1+</h2>
                            <p className='text-white'>Years of Experience</p>
                        </div>
                    </div>
                </div>
                <a href="/CV_Rubico.pdf"  className="btn btn-home uppercase" onClick={onButtonClick} ><span className='iconround p-3 bg-btncircle rounded-full'><MdOutlineFileDownload className='text-2xl font-thicker text-darkcolor' /></span>download cv</a>
            </div>

            <h3 className='uppercase text-white mt-[80px] mb-[100px] text-center'>skills</h3>

            <div className="flex gap-10 justify-around w-full py-10 text-lightcolor">
                <div className="skills text-center inline-block">
                    <img src={`${baseImgUrl}/java.png`} alt="" className='w-[100%]' />
                    <h4 className='uppercase mt-3'>java</h4>
                </div>
                <div className="skills text-center inline-block">
                    <img src={`${baseImgUrl}/css.png`} alt="" className='w-[100%]' />
                    <h4 className='uppercase mt-3'>css</h4>
                </div>
                <div className="skills text-center inline-block">
                    <img src={`${baseImgUrl}/html.png`} alt="" className='w-[100%]' />
                    <h4 className='uppercase mt-3'>html</h4>
                </div>
                <div className="skills text-center inline-block">
                    <img src={`${baseImgUrl}/react.png`} alt="" className='w-[100%]' />
                    <h4 className='uppercase mt-3'>react js</h4>
                </div>
                <div className="skills text-center inline-block">
                    <img src={`${baseImgUrl}/figma.png`} alt="" className='w-[100%]' />
                    <h4 className='uppercase mt-3'>figma</h4>
                </div>
            </div>

            <h3 className='uppercase text-white mt-[80px] mb-[80px] text-center text-lightcolor'>education</h3>

            <div className="education grid grid-cols-3 gap-10 py-10 text-white">
                <div className="educards">
                    <div className="educard grid grid-cols-[.5fr,3fr]">
                        <span className='p-2 bg-btncircle border-[1px] border-buttons rounded-full w-[50px] h-[50px]'><FaGraduationCap className='text-3xl text-darkcolor mx-auto'/></span>
                        <div className="cardinfo">
                            <h4>2019-Present</h4>
                            <p>BS Information Technology STI College San Pablo</p>
                        </div>
                    </div>
                </div>
                <div className="educards">
                    <div className="educard grid grid-cols-[.5fr,3fr]">
                        <span className='p-2 bg-btncircle border-[1px] border-buttons rounded-full w-[50px] h-[50px]'><FaGraduationCap className='text-3xl text-darkcolor mx-auto'/></span>
                        <div className="cardinfo">
                            <h4>2017-2019</h4>
                            <p>Science, Technology, Engineering & Mathematics (STEM)</p>
                            <p>Senior High school</p>
                            <p>STI College San Pablo</p>
                        </div>
                    </div>
                </div>
                <div className="educards">
                    <div className="educard grid grid-cols-[.5fr,3fr]">
                        <span className='p-2 bg-btncircle border-[1px] border-buttons rounded-full w-[50px] h-[50px]'><FaGraduationCap className='text-3xl text-darkcolor mx-auto'/></span>
                        <div className="cardinfo">
                            <h4>2013-2017</h4>
                            <p>Junior High school</p>
                            <p>Our Lady of Sorrows Academy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe

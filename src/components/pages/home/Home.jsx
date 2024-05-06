import React from 'react'
import Socials from '../../partials/Socials'
import Header from '../../partials/header/Header'
import { baseImgUrl } from '../../helpers/functions-general'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight, FaGraduationCap } from 'react-icons/fa'

const Home = () => {
  return (
    <>
    <div>
        <Header/>
        <Socials/>
    

    <div className="banner pt-[100px] container">
        <div className="banner__wrapper flex items-center">
            <img src={`${baseImgUrl}/pichome.svg`} alt="" className='size-[900px]' />
            <div className="banner__content">
                <h1 className='text-7xl leading-[3.8rem] uppercase mb-10'>Louren <br /> Isobel <br />Rubico</h1>
                <h3 className='w-[500px] mb-10'>I specialize in creating clean and user-friendly experiences as a web developer and front-end developer from the Philippines.
My life's work is creating high-quality software that makes a positive impact on the people around me.</h3>
                <a href="" className="btn btn-home uppercase"><span className='iconround p-3 bg-btncircle rounded-full'><FaArrowCircleRight className='text-2xl text-darkcolor' /></span>more about me</a>
            </div>
        </div>
    </div>

    <section className="aboutme bg-primary py-12 w-full h-full">
        <h1 className='text-8xl opacity-5 text-accent text-center'>Resume</h1>
        <h2 className='uppercase text-3xl text-center -translate-y-[60px]'>About me</h2>
        <div className="aboutme__wrapper container">
            <h3 className='uppercase text-buttons mb-[80px]'>Personal info</h3>

            <div className="about flex flex-col-2 gap-20">

                <div className="info flex flex-col-2 gap-[10rem] h-full">
                    <div className="right flex flex-col-2 gap-10">
                        <ul className="name">
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

                    <div className="left flex flex-col-2 gap-10 justify-end">
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

                <div className="cards flex flex-wrap justify-center gap-5 ">
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
            <a href="" className="btn btn-home uppercase"><span className='iconround p-3 bg-btncircle rounded-full'><FaArrowCircleRight className='text-2xl text-darkcolor' /></span>download cv</a>
        </div>

        <h3 className='uppercase text-white mt-[80px] mb-[100px] text-center'>skills</h3>

        <div className="flex gap-10 justify-around w-full container ">
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

        <h3 className='uppercase text-white mt-[80px] mb-[80px] text-center'>education</h3>

        <div className="education container">
            <div className="educards">
                <div className="educard grid grid-cols-2">
                    <span className='p-3 bg-btncircle border-[1px] border-buttons rounded-full inline-block'><FaGraduationCap className='text-3xl text-darkcolor'/></span>
                    <div className="cardinfo">
                        <h4>2019-Present</h4>
                        <p>BS Information Technology STI College San Pablo</p>
                    </div>
                </div>
            </div>
        </div>
        
    </section>



</div>


    </>
  )
}

export default Home

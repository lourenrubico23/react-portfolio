import React from 'react'
import Socials from '../../partials/Socials'
import Header from '../../partials/header/Header'
import { baseImgUrl } from '../../helpers/functions-general'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight, FaDownload, FaEnvelopeOpen, FaGraduationCap, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineFileDownload, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { BsSend } from 'react-icons/bs'
import Footer from '../../partials/footer/Footer'

const Home = () => {
  return (
    <>
    
        <Header/>
        <Socials/>
    

    <div className="banner pt-[100px] container text-lightcolor">
        <div className="banner__wrapper grid grid-cols-2 items-center">
            <img src={`${baseImgUrl}/pichome.svg`} alt="" className='size-[800px]' />
            <div className="banner__content">
                <h1 className='text-7xl leading-[3.8rem] uppercase mb-10'>Louren <br /> Isobel <br />Rubico</h1>
                <h3 className='w-[500px] mb-10'>I specialize in creating clean and user-friendly experiences as a web developer and front-end developer from the Philippines.
My life's work is creating high-quality software that makes a positive impact on the people around me.</h3>
                <a href="" className="btn btn-home uppercase"><span className='iconround p-3 bg-btncircle rounded-full'><MdOutlineKeyboardArrowRight className='text-2xl font-thicker text-darkcolor' /></span>more about me</a>
            </div>
        </div>
    </div>
 
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
                <a href="" className="btn btn-home uppercase"><span className='iconround p-3 bg-btncircle rounded-full'><MdOutlineFileDownload className='text-2xl font-thicker text-darkcolor' /></span>download cv</a>
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

    <section className="projects py-[5rem]">
        <div className="container">
        <h1 className='text-7xl opacity-[16%] text-primary text-center uppercase'>Works</h1>
        <h2 className='uppercase text-3xl text-center -translate-y-[60px] text-lightcolor'>Projects</h2>
            <div className="projects__wrapper mb-10 flex flex-cols-3 gap-5  w-[full] mx-auto">

                    <div className="card rounded-[1rem] bg-lightcolor overflow-hidden mx-auto">
                        <div className="card-img">
                            <div className="content text-darkcolor p-7">
                                <h3>Natural Smile Dental Clinic</h3>
                                <small>Web Design</small>
                                <p>A website for both clients and clinic. 
                                    The clients can schedule their appointment through this website.</p>
                            <a href="" className='text-buttons hover:text-btncircle'>Read more..</a> 
                            </div>
                            
                        </div>
                        <div className="card-description ">
                            <img src={`${baseImgUrl}/card1.png`} alt="" className='card__img rounded-[1rem] ' />     
                        </div>
                    </div> 
                
                    <div className="card rounded-[1rem] bg-lightcolor  overflow-hidden mx-auto">
                        <div className="card-img">
                            <div className="content text-darkcolor p-7">
                                <h3>Shoes Ni Sabel</h3>
                                <small>Web Design</small>
                                <p>Customer can discover and buy footwear reflecting Filipino's shoemakers' unique craftmanship and cultutal identity.</p>
                            <a href="" className='text-buttons hover:text-btncircle'>Read more..</a> 
                            </div>
                        </div>
                        <div className="card-description ">
                            <img src={`${baseImgUrl}/card2.png`} alt="" className='card__img rounded-[1rem] ' />     
                        </div>
                    </div> 
  
                    <div className="card rounded-[1rem] bg-lightcolor  overflow-hidden mx-auto">
                        <div className="card-img">
                            <div className="content text-darkcolor p-7">
                                <h3>Sports Blog Website</h3>
                                <small>Web Design</small>
                                <p>Our blog sports website offers insight, update, and trends across diverse sports disciplines and tournaments </p>
                            <a href="" className='text-buttons hover:text-btncircle'>Read more..</a> 
                            </div>
                        </div>
                        <div className="card-description ">
                            <img src={`${baseImgUrl}/card3.png`} alt="" className='card__img rounded-[1rem] ' />     
                        </div>
                    </div> 

            </div>
        </div>
    </section>

    <section className="contactme bg-primary py-[5rem] ">
        <div className="container">
                <h1 className='text-7xl opacity-5 text-accent text-center uppercase'>Contact</h1>
                <h2 className='uppercase text-3xl text-center -translate-y-[60px] text-lightcolor'>get in touch</h2>
            <div className="contactme__wrapper grid grid-cols-[.5fr,1fr] gap-20">
                
                
                
                <div className="address text-lightcolor">
                    <h4>DON’T BE SHY!</h4>
                    <p className='mb-10'>Feel free to get in touch with me.
                    I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

                    <div className=''>
                       <div className="contact__address grid grid-cols-[.2fr,1fr] mb-5">
                            <div className="icons">
                                <FaMapMarkerAlt className='text-buttons text-3xl' />
                            </div>
                            <div className="location ">
                                <h4>Address</h4>
                                <p>Brgy. Bulakin 1 Dolores, Quezon</p>
                            </div>
                        </div>
                        <div className="contact__address grid grid-cols-[.2fr,1fr] mb-5">
                            <div className="icons">
                                <FaEnvelopeOpen className='text-buttons text-3xl'/>
                            </div>
                            <div className="location">
                                <h4>Mail Me</h4>
                                <p>lourenisobel18@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact__address grid grid-cols-[.2fr,1fr] mb-5">
                            <div className="icons">
                                <FaPhoneAlt className='text-buttons text-3xl'/>
                            </div>
                            <div className="location">
                                <h4>Call Me</h4>
                                <p>+639174278410</p>
                            </div>
                        </div> 
                    </div>
                </div>

                <div className="inputs max-w-[700px]">
                    <div className="names grid grid-cols-2 gap-2">
                        <div class="inputGroup">
                            <input type="text" required="" autoComplete='off' className='max-w-[100%]'/>
                            <label for="name">Your Name</label>
                        </div>
                        <div class="inputGroup">
                            <input type="text" required="" autoComplete='off' className='max-w-[100%]'/>
                            <label for="name">Your Email</label>
                        </div>
                    </div>
                    <div class="inputGroup">
                            <input type="text" required="" autoComplete='off' className='max-w-[700px] mb-2'/>
                            <label for="name">Your Subject</label>
                    </div>
                    <div class="inputGroup">
                            <textarea name="" id="" className='max-w-[700px] h-[160px]'></textarea>
                            <label for="name">Your Message</label>
                    </div>
                    <div className='flex justify-end'>
                        <a href="" className="btn btn-home uppercase"><span className='iconround p-3 bg-btncircle rounded-full'><BsSend className='text-2xl font-thicker text-darkcolor' /></span>Send Message</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    
    <Footer/>


    </>
  )
}
                    

export default Home

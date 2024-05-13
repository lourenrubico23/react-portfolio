import React from 'react'
import { BsSend } from 'react-icons/bs'
import { FaEnvelopeOpen, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
  return (
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
  )
}

export default Contact

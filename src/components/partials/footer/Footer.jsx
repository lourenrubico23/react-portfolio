import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer border-t-[1px] border-line border-accent py-[2rem] bg-primary text-lightcolor'>
        <div className="container">
            <div className="footer__wrapper flex flex-col-2 justify-between items-center">
              <div className="socials flex gap-5">
                <a href=""><FaFacebook className='text-2xl'/></a>
                <a href=""><FaLinkedin className='text-2xl'/></a>
                <a href=""><AiFillInstagram className='text-2xl'/></a>
              </div>
              <a href=""><p>lourenisobel18@gmail.com</p></a>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer

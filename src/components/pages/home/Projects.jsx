import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'

const Projects = () => {
  return (
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
  )
}

export default Projects

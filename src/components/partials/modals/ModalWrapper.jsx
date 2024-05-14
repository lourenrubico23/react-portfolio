import React from 'react'

const ModalWrapper = ({children, position="justify-end"}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-screen flex ${position === "center" ? "justify-center" : "justify-end"} justify-end items-center z-[1]`}>
        <div className="backdrop absolute top-0 left-0 h-full w-full bg-black/70 z-[-1]">     
        </div>
        {children}
    </div>
  )
}

export default ModalWrapper

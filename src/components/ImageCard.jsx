import React from 'react'

function ImageCard({children, imgSrc, ...props}) {
  return (
    <div {...props} className = "mb-10 mx-12 relative w-60 max-w-xs overflow-hidden rounded-2xl shadow-lg group">
      <img src={imgSrc} alt="represents respective departments" className="transition-transform blur-[2px] group-hover:blur-none scale-110 duration-200 "/>

      <div className="absolute inset-0 flex-col items-center pt-16 bg-gradient-to-t translate-y-0 from-black/80 to-transparent hover:translate-y-40 duration-500 ease-in ">
        <div className="p-4 text-white font-sans drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            {children}
        </div>
      </div>
    </div>
  )
}

export default ImageCard

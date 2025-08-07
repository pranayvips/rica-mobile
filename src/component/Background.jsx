import React from 'react'

const Background = ({imgName}) => {
  return (
    <div className='absolute h-screen w-screen bg-blue-500 top-0 left-0 z-[-1]'>
        <img src={imgName} alt="background image for this screen" className='w-full h-full object-cover' />
    </div>
  )
}

export default Background
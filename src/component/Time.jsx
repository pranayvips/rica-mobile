import React, { useEffect, useState } from 'react'

const Time = () => {
    const [hour,setHour] = useState(0);
    const [minute,setMinute] = useState(0);


    useEffect(() => {
      function TimeMaker(){
        const now = new Date()
        const currentHour = now.getHours()
        const currentMinute = now.getMinutes()

        if(currentHour<10){
          setHour(`0${currentHour}`)
        }else{
          setHour(currentHour)
        }
        if(currentMinute<10){
          setMinute(`0${currentMinute}`)
        }else{
          setMinute(currentMinute)
        }
      }

      setTimeout(() => {
        TimeMaker()
      }, 30000);

      TimeMaker()
    }, [])
    
  return (
    <h1 className='text-[110px] text-white font-extrabold mt-10 text-shadow flex items-center'>
        {hour} 
        <span className='px-3'>:</span>
        {minute}
  </h1>
  )
}

export default Time
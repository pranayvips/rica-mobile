import React from 'react'
import Time from './component/Time'
import Wish from './component/Wish'

const Home = () => {
    
  return (
    <section className='flex flex-col justify-center items-center mt-20'>
        <Time />
        <Wish />
        {/* absolute positioned component are below */}
        {/* <Weather /> */}
    </section>
  )
}

export default Home
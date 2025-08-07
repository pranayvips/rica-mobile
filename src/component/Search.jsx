import React, { useEffect, useState } from 'react'

const Search = ({setCurrentTab}) => {
  const [query,setQuery] = useState("")


  
  return (
    <section className='h-screen pt-5'>
        {/* the serach bar */}
        <div className='flex items-center px-3 py-3 gap-2  mx-2 border-2 border-gray-500 rounded-md'>
          <img src="/google.png" alt="google image" className='h-7' />
          <input type="text" autoFocus value={query} onChange={e=>setQuery(e.target.value)} className='text-white outline-none border-none text-xl w-full' placeholder='Search or type URL' />
          
          {
            query.length==0 ? 
              <div className='flex gap-2'>
                <button><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-7'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11130)"> <path d="M20 12H4" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 3.99976H18C19.1046 3.99976 20 4.89519 20 5.99976V7.99976" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 19.9998L6 19.9998C4.89543 19.9998 4 19.1043 4 17.9998L4 15.9998" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 15.9998V17.9998C20 19.1043 19.1046 19.9998 18 19.9998H16" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7.99976L4 5.99976C4 4.89519 4.89543 3.99976 6 3.99976L8 3.99976" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11130"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg></button>
                <button><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-7'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 17V21M12 21H9M12 21H15" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="10" y="3" width="4" height="10" rx="2" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect> <path d="M17.7378 12.7542C17.3674 13.9659 16.6228 15.0293 15.6109 15.7918C14.599 16.5544 13.3716 16.977 12.1047 16.9991C10.8378 17.0212 9.59647 16.6417 8.55854 15.9149C7.52061 15.1881 6.73941 14.1515 6.32689 12.9534" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
              </div> 
                : 
              <div>
                <button onClick={()=>setQuery('')}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-5'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_LG"> <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                </button>
              </div>
          }
        </div>

        {/* icon list here */}
        <div className='flex items-center gap-7 px-3 py-3 gap-2 mt-5 mx-2 rounded-md overflow-x-scroll'>
          <img src="/image.png" alt="" className='w-10' />
          <img src="/youtube.png" alt="" className='w-10' />
          <img src="/instagram.png" alt="" className='w-10' />
          <img src="/chatgpt.png" alt="" className='w-10' />
          <img src="/linkedin.png" alt="" className='w-10' />
          <img src="/github.png" alt="" className='w-10' />
          <img src="/movie.png" alt="" className='w-10' />
        </div>

        {/* relevant search result */}
        {/* <div className='flex items-center gap-7 px-3 py-3 gap-2 mt-5 mx-2 bg-[#111] rounded-md'>

        </div> */}

        {/* close on click on bottom */}
        <div className='w-screen h-[75%]' onClick={()=>setCurrentTab(0)}>
        </div>

    </section>
  )
}

export default Search
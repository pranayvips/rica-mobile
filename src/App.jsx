import { useState } from 'react'
import Home from './Home'
import BottomBar from './component/BottomBar'
import Background from './component/Background'
import Search from './component/Search'

function App() {
  // list of images of background that can be used
  const listBackground = ["/bg/1 (1).jpg","/bg/1 (2).jpg","/bg/1 (3).jpg","/bg/1 (4).jpg","/bg/1 (5).jpg","/bg/1 (6).jpg","/bg/1 (7).jpg","/bg/1 (8).jpg","/bg/1 (9).jpg","/bg/1 (10).jpg","/bg/1 (11).jpg","/bg/1 (12).jpg","/bg/1 (13).jpg",]
  
  // 0=> Home     |     1=> Menu     |       2=> Search     |     3=> Setting
  const [currentTab,setCurrentTab] = useState(0)

  // 0=> none     |     1=> Weather     |     2=> Todo
  const [otherTab,setOtherTab] = useState(0)


  return (
    <>

      {currentTab==0 && <Home />}
      {currentTab==2 && <Search setCurrentTab={setCurrentTab} />}

      <Background imgName={listBackground[12]} />
      <BottomBar currentTab={currentTab} setCurrentTab={setCurrentTab} otherTab={otherTab} setOtherTab={setOtherTab} />
    </>
  )
}

export default App

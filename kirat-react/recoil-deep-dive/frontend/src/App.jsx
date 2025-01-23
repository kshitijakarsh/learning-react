import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'


function App() {

  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp(){
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  // useEffect(()=>{
  //   axios.get("http://localhost:3000/")
  //   .then(res => {
  //     setNetworkCount(res.data)      
  //   })
  // },[])

  return(
    <>
      <button>Home</button>
      <button> My network ({networkCount.networks })</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Notificaitons ({networkCount.notification})</button>
      <button>Messaging ({networkCount.messaging})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}




export default App

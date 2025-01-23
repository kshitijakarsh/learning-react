// import { BrowserRouter, Route, Routes, useNavigate, lazy } from "react-router-dom"
// import React, { useContext, useState } from "react"
// import { CountContext } from "./Context"
// const Landing = React.lazy(()=> import("./components/Landing"))
// const Dashboard = React.lazy(()=> import("./components/Dashboard"))

import { useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil"
import { countAtom, countAtomSelector } from "./store/atoms/count"

// function App() {

//   return (
//     <>
//       <BrowserRouter>
//         <Appbar/>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard/>}/>
//           <Route path="/" element={<Landing/>}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )

//   function Appbar(){
//     const navigate = useNavigate()

//     return <div>
//       <div>
//         <button onClick={()=>{
//           navigate("/")
//         }}>Landing Page</button>

//         <button onClick={()=>{
//           navigate("/dashboard")
//         }}>Dashboard</button>
//       </div>
//     </div>
//   }


// }

// export default App



function App(){



  // const [count, setCount] = useState(0)

  return (
    <div>
      <RecoilRoot>
        <Count ></Count>
      </RecoilRoot>
        
    </div>
  )
}

function Count(){
  return <div>
    <CountRenderer/>
    <Buttons/>
  </div>
}

function CountRenderer(){
  // const count = useContext(CountContext)
  const count = useRecoilValue(countAtom)
  return <div>
    {count}
  </div>
}

function Buttons(){
  // const count = useContext(CountContext)
  const setCount = useSetRecoilState(countAtom)
  const isEven = useRecoilValue(countAtomSelector)

  return <div>
    <button onClick={()=>{
      setCount(count => count+1)
    }}>Increase</button>

    <button onClick={()=>{
      setCount(count => count-1)
    }}>Decrease</button>
    <p>{isEven ? "It is even" : null}</p>
    
  </div>
}


export default App
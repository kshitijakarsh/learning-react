// import { BrowserRouter, Route, Routes, useNavigate, lazy } from "react-router-dom"
import React, { useContext, useState } from "react"
import { CountContext } from "./Context"
// const Landing = React.lazy(()=> import("./components/Landing"))
// const Dashboard = React.lazy(()=> import("./components/Dashboard"))

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

  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount}></Count>
      </CountContext.Provider>
    </div>
  )
}

function Count({setCount}){
  return <div>
    <CountRenderer/>
    <Buttons setCount={setCount}/>
  </div>
}

function CountRenderer(){
  const count = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){
  const count = useContext(CountContext)
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>

    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
  </div>
}


export default App
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { todosAtomFamily } from "./atoms"
import './App.css'

function App() {


  return (
    <>
      <RecoilRoot>
        <Todo id={1}/> 
        <br/>
        <Todo id={2}/>
      </RecoilRoot>
    </>
  )
}

function Todo({id}){
  const currentTodo = useRecoilValue(todosAtomFamily(id))

  return(
    <>
      {currentTodo.title} <br/>
      {currentTodo.description}
      <br/>
    </>
  )
}

export default App

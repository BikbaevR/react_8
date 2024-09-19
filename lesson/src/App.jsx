import { useState } from 'react'
import './App.css'
import {MyHeader} from "./MyHeader/index.jsx";


function App() {

  // const createCounter = () => {
  //   let n = 10
  //   return function (){
  //     return n++
  //   }
  // }
  // const counter = createCounter()
  // console.log(counter())
  // console.log(counter())
  // console.log(counter())

  const [count, setCount] = useState(0)

  return (
    <>
    <MyHeader title={'MyHeader'} />
    </>
  )
}

export default App

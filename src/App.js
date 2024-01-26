// import {BrowserRouter, Routes, Route} from "react-router-dom"
// import React from "react"
// import Layout from "./Layout"
// import Home from "./Home"
// import About from "./About"
// import Contact from "./Contact"

// export default function App(){
//   return(
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout/>}>
//         <Route index element={<Home/>}/>
//         <Route path="about" element={<About/>}/>
//         <Route path="contact" element={<Contact/>}/>


//       </Route>
//     </Routes>
//     </BrowserRouter>
    
//   )
// }

// // import React from 'react'
// // import Basic from './Basic'
// // export default function App() {
// //   return (
// //     <div><Basic/></div>
// //   )
// // }

// import React from "react";
// import {useState} from 'react'
// import './newcounter.css'

// export default function App()
// {
//   const [count,setCount]=useState(0);

//   const Increment= ()=>{setCount(count+1);};
//   const Decrement= ()=>{setCount(count-1);};
//   const Reset=()=>{setCount(0);};
//   return(
//   <div>
//     <h3>Counter: {count}</h3>
//     <button onClick={Increment}>Add!</button>
//     <button onClick={Decrement}>Subtract!</button>
//     <button onClick={ Reset}>Reset!</button>
//   </div>
//   )
// }




import React from 'react'

export default function App() {
  return (
    <div>
      {
        data ? (
          <p>Data: {data}</p>
        ):
        (<p>Loading...</p>)
      }
    </div>
  )
}

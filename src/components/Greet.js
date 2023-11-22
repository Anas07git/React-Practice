import react from 'react'

// function Greet(){
//     return <h1> Hello Anas</h1>

// }
const Greet=(props)=>{ 
  const{name,no}=props
    return(
      <div>
      <h2> Hello {props.name} no.{props.no} </h2>
      <h2> Hello {name} no.{no}</h2>
      {props.children}
      </div>
    )
}

export default Greet
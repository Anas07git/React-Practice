import React from 'react'
import Persons from './Persons'

function NameList() {

const personNames= ['Anas', 'Akash','Anas']
const personList=[
    {
        id:1,
        name:"Anas"
    },
    {
        id:2,
        name:"Akashh"
    },
    {
        id:3,
        name:"Akshay"
    }
]
//  const persons= personList.map(person => <Persons key={person.id} person={person}/>)
    const names= personNames.map((name,index)=> <h2 key={index}>{index} {name}  </h2>)

  return (
    <div>
      {/* {persons} */}
      {names}
    </div>
  )
}

export default NameList

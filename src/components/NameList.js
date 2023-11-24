import React from 'react'
import Persons from './Persons'

function NameList() {

const personList=[
    {
        id:1,
        name:"Anas"
    },
    {
        id:2,
        name:"Akash"
    },
    {
        id:3,
        name:"Akshay"
    }
]
 const persons= personList.map(person => <Persons person={person}/>)

  return (
    <div>
      {persons}
    </div>
  )
}

export default NameList

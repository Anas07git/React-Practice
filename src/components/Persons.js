import React from 'react'

function Persons({person}) {
  return (
    <div>

       <h2> I am {person.name} with  id {person.id} </h2>
    </div>
  )
}

export default Persons

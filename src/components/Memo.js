import React from 'react'

function Memo({name}) {
    console.log("RENDERING MEMO")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(Memo)

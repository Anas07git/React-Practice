import React from 'react'



const ForwardRefChild = React.forwardRef((props,ref) => {
    return (
      <div>
        <input ref={ref} ></input>
      </div>
    )
  })

export default ForwardRefChild

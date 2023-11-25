import React from 'react'
import "./style.css"

function Stylesheet(props) {
    const className= props.primary? 'primary' : ''
  return (
    <div>
      <h2 className={`${className} font-size`}>CSS Stylesheet</h2>
    </div>
  )
}

export default Stylesheet

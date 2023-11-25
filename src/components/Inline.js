import React from 'react'

const styless={
    color:'red',
    fontSize:'45px'
}
function Inline() {

  return (
    <div>
              <h2 className='error'> Error</h2>
              {/* <h2 className={styles.success}> Success</h2> */}


      <h2 style={styless}> CSS Inline</h2>
    </div>
  )
}

export default Inline

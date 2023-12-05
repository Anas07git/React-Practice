import React from 'react'
import ErrorBoundary from './ErrorBoundary'

const Heros=(props)=>{
    if(props.hero==="Joker"){
        throw new Error("Not a Hero")
    }
    return props.hero
}

function Hero(){
    return (
        <div>
     <Heros hero="Superman"/>
     <Heros hero="Batman"/>
            <ErrorBoundary>
     <Heros hero="Joker"/>
     </ErrorBoundary>
     </div>
    )
} 
   

export default Hero

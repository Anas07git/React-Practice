import React from "react";

// Functional Component with JSX
// export const Jsx=()=> <div className="jsx"> <h1>without jsx</h1> </div>


// Without JSX 
export const Jsx = () => {
    return React.createElement('div', { className: 'jsx' }, React.createElement('h1', null, "With JSX"))
}
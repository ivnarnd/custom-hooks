import { useState } from "react"

export const UseCount = (initialValue = 0) => {
  const [counter,setCounter] = useState(initialValue);
  //funciones del hook
  const increment = (val = 1)=>{
    setCounter(counter+val)
  };
  const decrement = (val = 1)=>{
    setCounter(counter-val);
  }
  const reset = ()=>{
    setCounter(initialValue);
  }
  
  return (
    {
        counter,
        increment,
        decrement,
        reset
    }
  )
}

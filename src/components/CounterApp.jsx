import { UseCount } from "../hooks/UseCount"

export const CounterApp = () => {
  const {counter,increment,decrement, reset} = UseCount(0);
  return (
    <>
        <h1>Counter: </h1>
        <h4>{counter}</h4>
        <button onClick={()=>{increment(5)}} className="btn btn-primary">+1</button>
        <button onClick={()=>{reset()}} className="btn btn-danger m-3">Reset</button>
        <button onClick={()=>{decrement(2)}} className="btn btn-primary">-1</button>
    </>
  )
}

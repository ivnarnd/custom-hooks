import { useState } from "react";

export const UseForm = (initialValue = {}) => {
    const [formState,setFormState] = useState(initialValue);

    

    const onInputChange = ({target})=>{
        const {name,value} = target;
        setFormState({
            ...formState,
            [name]:value
        })
        console.log(name,value);
      }
  return (
    {
        formState,
        onInputChange
    }
  )
}

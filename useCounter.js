import { useState } from "react"


export const useCounter = (InitialValue = 10) => {
    
    const [counter, setCounter] = useState(InitialValue)

    const increment = (value = 1) => {
        setCounter( counter + value);
    }

    const decrement = (value = 1) =>{
        if (counter === 0) return;
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(InitialValue)
    }

  return {
    counter,
    increment,
    decrement, 
    reset,
  }
}

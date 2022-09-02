import React, { useEffect, useState } from 'react'

const Counter = ({start,inc}) => {

    const [number,setNumber] = useState(start)
    const [isRed,setIsRed] = useState(false)

    function increment(){
        // number = number + 1
        setNumber(number+inc)
    }

    const decrement = () => {
        setNumber(number-inc)
    }

    useEffect(()=>{
        if(number >= 10){
            setIsRed(true)
        }
        else{
            setIsRed(false)
        }
    },[number])

    return (
        <div className='counter'>
            <h2>Counter</h2>
            <h1
                style={{
                    color: isRed ? "red" : "black"
                }}
            >{number}</h1>
            {isRed && <p>You clicked too much!</p>}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter
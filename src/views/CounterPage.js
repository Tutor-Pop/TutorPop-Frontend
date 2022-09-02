import React from 'react'
import Counter from '../components/Counter'

const CounterPage = () => {
  return (
    <div>
        <h1>This is Counter Page</h1>
        <div style={{
            display: "flex"
        }}>
            <Counter start={5} inc={1}/>
            <Counter start={1} inc={2}/>
            <Counter start={2} inc={3}/>
        </div>
        

    </div>
  )
}

export default CounterPage
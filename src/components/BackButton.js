import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

const BackButton = ({...args}) => {
    
    const nevigate = useNavigate()

  return (
    <Button {...args} onClick={() => nevigate('./../')} color='secondary'>
        {args.children}
    </Button>
  )
}

export default BackButton
import React, { useState } from 'react'
import Select from 'react-select'
import Counter2 from '../components/Counter2'
import { FormGroup } from '../components/FormGroup/FromGroup'

const Test = () => {
  const [selectedAccount,setSelectedAccount] = useState({})
  const [optionAccount,setOptionAccount] = useState([{pk:1,value:10,label:"Number 1"},{pk:2,value:20,label:"Number 2"},{pk:3,value:30,label:"Number 3"},{pk:4,value:40,label:"Number 4"},{pk:5,value:50,label:"Number 5"}])
  
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  
  return (
    <div>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>

      <Select options={options}/>
      
      {/* <FormGroup
        type="select"
        label="Account"
        placeholder="Account"
        classerElement="react-select"
        value={
          selectedAccount !== undefined
            ? optionAccount.find(
              (e) =>
                e.value.pk ===
                selectedAccount.pk
            )
            : undefined
        }
        onChange={(e) =>
          setSelectedAccount(e.value)
        }
        options={optionAccount}
      /> */}
      <Counter2 start={2} />
      <Counter2 start={8} />
      
    </div>
  )
}

export default Test
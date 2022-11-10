import React from 'react'
import Select from 'react-select'

function UserShortChip() {
  return (
    <div className="Element">
       <div class="teacher">
       <Select   
            isMulti
            name="colors"
            options={[{ value: 'ocean', label: 'Ocean', isFixed: true },
           { value: 'blue', label: 'Blue', isDisabled: true },
           { value: 'purple', label: 'Purple'},
           { value: 'red', label: 'Red', isFixed: true },
           { value: 'orange', label: 'Orange'},
           { value: 'yellow', label: 'Yellow'},
           { value: 'green', label: 'Green'},
           { value: 'forest', label: 'Forest'},
           { value: 'slate', label: 'Slate'},
           { value: 'silver', label: 'Silver'},]}
            className="basic-multi-select"
            classNamePrefix="select"
        />
       </div>
   </div>
  )
}

export default UserShortChip
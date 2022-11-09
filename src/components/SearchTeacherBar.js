import React from 'react';
import { Button, Input } from 'reactstrap';
import { ReactComponent as PlusIcon } from '../img/plus-solid.svg';
import { getTeacher } from '../services/school.service';

function SearchTeacherBar() {
  const accountId = localStorage.getItem;
  
  return (
      <div className='searchTeacherContainer'>
        <div className='searchTeacherBar'>
          <Input id='searchTeacher' type='text' placeholder='Please fill your co-worker...'/>
          <Button className='plus-btn'>
            <PlusIcon className='plus-img' />
          </Button>
        </div>

        <div className='dataTeacher'>
            
        </div>

    </div>
  )
}

export default SearchTeacherBar
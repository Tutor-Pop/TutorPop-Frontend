import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import { Button } from 'reactstrap';
import { getAllOthers } from '../services/school.service';

function SearchTeacherBar({schoolId,list,setList}) {
    const accountId = localStorage.getItem('accountId');
    // options => ตัวเลือก , value => ตัวถูกเลือก
    const [options,setOption] = useState([]) 
    // value => ตัวที่ถูกเลือก
    const [value,targetValue] = useState([]);


    useEffect(()=>{
        getAllOthers(schoolId).then(
            response => setOption([...response.data.others])
        )
    },[])

    const handlePlus = () => {
        console.log('pressed plus-btn');
        console.log("oldvalue",value);
        const newValue = value.map((eachValue) => (
            {
                account_id: eachValue.value,
                description: eachValue.description,
                email: eachValue.email,
                firstname: eachValue.firstname,
                is_deleted: eachValue.is_deleted,
                is_verified: eachValue.is_verified,
                lastname: eachValue.lastname,
                password: eachValue.password,
                profile_picture: eachValue.profile_picture,
                token: eachValue.token,
                token_expire: eachValue.token_expire,
                username: eachValue.username,
                year_of_birth: eachValue.year_of_birth,
            }
        ))
        console.log('newvalue',newValue)
        setList([...list,...newValue]);
        targetValue([])
    }
    

    return (
            <div className='searchTeacherBar'>
                <Select id='searchTeacher' 
                    isMulti
                    onChange={e => targetValue(e)}
                    value={value}
                    options={
                        options.map((option) => (
                            {
                                value: option.account_id, 
                                label: option.username,
                                account_id: option.account_id,
                                description: option.description,
                                email: option.email,
                                firstname: option.firstname,
                                is_deleted: option.is_deleted,
                                is_verified: option.is_verified,
                                lastname: option.lastname,
                                password: option.password,
                                profile_picture: option.profile_picture,
                                token: option.token,
                                token_expire: option.token_expire,
                                username: option.username,
                                year_of_birth: option.year_of_birth,
                            }
                        ))
                    }
                    className="basic-multi-select"
                    classNamePrefix="search-teacher"
                />
                
                <div>
                 <Button color='primary' className='plus-btn h-35' onClick={handlePlus}>
                    <FontAwesomeIcon size='xl' icon={faPlus}/>
                </Button>
                </div>
            </div>
  )
}

export default SearchTeacherBar
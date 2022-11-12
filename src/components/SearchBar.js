import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap'

const SearchBar = ({searchValue,setsearchValue}) => {
  return (
    <div className='flex search-bar'>
        <div>
            <Form>
                <FormGroup>
                    <Input
                    onChange={e => setsearchValue(e.target.value)}
                    value={searchValue}
                    type="search"
                    className='input-search'
                    >
                    </Input>
                </FormGroup>
            </Form>
        </div>
        <div>
            <Button className='search-btn'>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </Button>
        </div>
    </div>
  )
}

export default SearchBar
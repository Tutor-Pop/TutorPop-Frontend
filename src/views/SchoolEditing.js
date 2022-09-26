import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Container, Form, Input, Label, Row } from 'reactstrap'

const SchoolEditing = () => {

  const school = {
    school_id: '1',
    name: 'School Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus sem, fermentum ut cursus nec, cursus id sem. Nulla justo enim, lacinia quis sagittis id, vehicula vel ligula. Mauris justo nisl, feugiat eu auctor ut, venenatis vel mi. Phasellus sed arcu semper, lacinia libero eget, feugiat velit. Pellentesque imperdiet in ex et tempus.',
    address: '123 Building A, Bangkok'
  }

  const { name, description, address } = school;

  return (
    <div className='school-editing'>
      <Form>
        <Container className='school-editing-container'>
          <Row className='school-editing-box'>
            <Row className='ps-0 pe-0'>
              <h1 className='mb-10'>School Editing</h1>
            </Row>
            <Row className='school-editing-input'>
              <Label for='school-name'>
                Tutoring School Name<span className="required-star">*</span>
              </Label>
              <Input id='school-name'
                      className='mb-3'
                     type='text' 
                     defaultValue={name}
                     required={true}
              />
              <Label for='school-description'>
                School Description
              </Label>
              <Input id='school-description' 
                     className='mb-3' 
                     type='textarea'
                     defaultValue={description}
                     rows='5'
              />
              <Label for='school-address'>
                School Address<span className="required-star">*</span>
              </Label>
              <Input id='school-address' 
                     className='mb-3'
                     type='textarea'
                     defaultValue={address}
                     required={true} 
              />
            </Row>
            <Row className='justify-evenly'>
              <Button className="edit-save-btn my-12" type="submit" color="primary" size="lg">
                Save
              </Button>
            </Row>    
          </Row>
        </Container>
      </Form>
    </div>
  )
}

export default SchoolEditing
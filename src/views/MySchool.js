
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import SchoolAddCard from '../components/SchoolAddCard'
import SchoolCard from '../components/SchoolCard'
import { startLoading, stopLoading } from '../redux/loading.reducer'
import { getSchoolOwner } from '../services/personal.service'
//ลอง + ดู
const MySchool = () => {

  const dispatch = useDispatch();

  const [myallSchool, setmyAllSchool] = useState([]);


  useEffect(() => {
    dispatch(startLoading())
    getSchoolOwner(localStorage.getItem("account_id")).then((res) => {
      dispatch(stopLoading())
      console.log(res.data);
      setmyAllSchool(res.data.schools)
    }
    ).catch(err => {
      dispatch(stopLoading())
    })
  }, []);
  //if [] reu ons when the row loads, and don't run again

  return (
    <div>
      <div className='MySchoolTitle'>
        <h1>My School</h1>
      </div>
      <div className='schoolcards'>
        <Container className='SchoolBox'>
          <Row md={3} xs={2} xl={4} xxl={5}>
            {myallSchool.map((owner) => (
              <Col className='myschool-img border'>
                <SchoolCard
                  school_id={owner.school_id}
                  school_name={owner.name}
                  logo_url={owner.logo_pic}
                  status={owner.status}
                />
              </Col>
            ))}
            <Col className='myschool-img border'><SchoolAddCard /></Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default MySchool
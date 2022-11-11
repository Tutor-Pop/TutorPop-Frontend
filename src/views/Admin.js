import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Col, Container, Row } from 'reactstrap'
import AdminCourseManageBtn from '../components/AdminCourseManageBtn'
import AdminSchoolManageBtn from '../components/AdminSchoolManageBtn'
import AdminSchoolRequestBtn from '../components/AdminSchoolRequestBtn'
import AdminUserManageBtn from '../components/AdminUserManageBtn'
import ClassroomManagementBtn from '../components/ClassroomManagementBtn'
import LogoBannerBtn from '../components/LogoBannerBtn'
import SchoolEditingBtn from '../components/SchoolEditingBtn'
import { startLoading, stopLoading } from '../redux/loading.reducer'
import { getActiveStats, getActiveStatsMonthly, getPendingRequest } from '../services/stats.service'

const Admin = () => {

  const dispatch = useDispatch()

  const [schoolRequest, setSchoolRequest] = useState(0)
  const [statsTotal, setStatsTotal] = useState({})
  const [statsMonthly, setStatsMonthly] = useState({})

  useEffect(() => {
    dispatch(startLoading())
    getPendingRequest()
      .then((response) => {
      setSchoolRequest(response.data.pending_req)
      return getActiveStats()
    }).then((response) => {
      setStatsTotal(response.data)
      return getActiveStatsMonthly()
    }).then((response) => {
      setStatsMonthly(response.data)
      dispatch(stopLoading())
    })
    }, [])

  return (
    <div className='admin-page'>
      <div className='stat-legend'>
        <h1 className='mb-4'>Greeting! Admin</h1>
        <div className='legends'>
          <div className='month-legend'></div>
          <p className='me-3'>Current Month</p>
          <div className='total-legend'></div>
          <p>Total</p>
        </div>
        <div className='dashboard'>
          <div className='new-request-dashboard'>
            <p>You've got</p>
            <h1>{schoolRequest ? schoolRequest : 0}</h1>
            <h5>New opened school request</h5>
          </div>
          <div className='account-stat-dashboard'>
            <div className='school-dashboard'>
              <h2 className='my-auto'>{statsTotal.schools ? statsTotal.schools : 0}</h2>
              <div className='school-dashboard-btm'>
                <h2>{statsMonthly.tm_schools ? statsMonthly.tm_schools : 0}</h2>
                <h4>Schools</h4>
              </div>
            </div>
            <div className='course-dashboard'>
              <h2 className='my-auto'>{statsTotal.courses ? statsTotal.courses : 0}</h2>
              <div className='course-dashboard-btm'>
                <h2>{statsMonthly.tm_courses ? statsMonthly.tm_courses : 0}</h2>
                <h4>Courses</h4>
              </div>
            </div>
            <div className='account-dashboard'>
              <h2 className='my-auto'>{statsTotal.accounts ? statsTotal.accounts : 0}</h2>
              <div className='account-dashboard-btm'>
                <h2>{statsMonthly.tm_accounts ? statsMonthly.tm_accounts : 0}</h2>
                <h4>Accounts</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Row className='mt-5'>
        <Col xs={4} className='border'><AdminSchoolRequestBtn/></Col>
        <Col xs={4} className='border'><AdminSchoolManageBtn/></Col>
        <Col xs={4} className='border'><AdminCourseManageBtn/></Col>
        <Col xs={4} className='border'><AdminUserManageBtn/></Col>
      </Row>
    </div>
  )
}

export default Admin
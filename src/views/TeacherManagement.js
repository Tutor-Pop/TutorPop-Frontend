import React, { useEffect, useState } from 'react'
import SearchTeacherBar from '../components/SearchTeacherBar'
import Chip from "@material-ui/core/Chip"
import Avatar from "@material-ui/core/Avatar"
import { Button, Col, Container, Row } from 'reactstrap'
import { Link, useParams } from 'react-router-dom'
import { getTeacher , getSchool , updateTeacher , deleteTeacher} from '../services/school.service'
import LinkButton from '../components/LinkButton'


const TeacherManagement = () => {
    const {schoolid} = useParams();
    const [list, setList] = useState([]);
    const [schoolName, setSchool] = useState("");
    const [deletedTeacher , delTeacher] = useState([]);

    useEffect(()=>{
        getTeacher(schoolid).then(
            response => setList([...response.data.teachers])
        )
        getSchool(schoolid).then(
            res => setSchool(res.data.result.name)
        )

    },[])

    useEffect(()=>{
        console.log('Effectttttlist',list);
    },[list])
    
    function handleDelete(id) {
        setList(list.filter((item)=>
            item.account_id != id
        ));
        delTeacher([...deletedTeacher,id])
    };


    const handleSave = () => {
        const result = list.map((teacher) => (
            teacher.account_id
        ))
        const answer = {'teachers' : result}
        const remove = {'teachers' :deletedTeacher}
        console.log('answer',answer)
        console.log('del',remove)
        updateTeacher(schoolid,answer); 
        deleteTeacher(schoolid,remove);  
        delTeacher([]);
    }


    return (
        <div className='teacherManangement'>
            <div className='teacher-man-title'>
                <h1>Teacher Management</h1>
                <h3 className='mb-10 border-b-2 border-zinc-400 text-right' w>{schoolName}</h3>
                <h3 className='invite mb-5'>Invite Teacher</h3>
                <SearchTeacherBar schoolId={schoolid} list={list} setList={setList}/>
            </div>
            <div className='invite-teacher'>
            <Container>
                <Row xs={1} sm={2} md={3} >
                    {list&&list.map((item) => (
                        <Col className='justify-center  pt-8'>
                            <Chip key={item.account_id} className='chip' color="primary" onDelete={()=>{handleDelete(item.account_id)}}  label={item.username} size="medium"/>
                        </Col>
                    ))}
                </Row>
            </Container>
            </div>

            <div className='inviteteacher-btn'>
            <Button  color="primary" className='save-btn' size="lg" onClick={handleSave}>Save</Button>
            <Button color="secondary" className="cancel-Btn" size="lg" href="/school-manage/:schoolid"> Cancel</Button>
            </div>
        </div>
    )
}

export default TeacherManagement
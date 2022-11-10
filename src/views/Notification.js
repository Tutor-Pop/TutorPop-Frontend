import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../App.css'
import NotificationCard from '../components/NotificationCard'
import { getNoti } from '../services/noti.service';

const Notification = () => {

    const [notis,setNotis] = useState([]);

    useEffect(()=>{
        getNoti(localStorage.getItem("account_id")).then(
            response => setNotis([...response.data.messages])
        )
    },[])

    console.log(notis);

  return (
    <div className='Noti'>
        <div className='header'>
            Notification
        </div>
        <div className='bot'>
            {notis.map((noti) =>(
                <NotificationCard 
                    messageNoti={noti.message_noti}
                    title={noti.title}
                    createTime={noti.create_time}
                />
            ))}
        </div>
    </div>
  )
}

export default Notification
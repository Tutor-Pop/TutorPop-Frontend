import { Avatar, Checkbox } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../constants/service.constant";

const ProfileCard = ({ id,name, image ,removeTeacher,setremoveTeacher}) => {
    
    const [checked,setchecked] = useState(false)

    const toggle = () => { 
        if(checked){
            setremoveTeacher([...removeTeacher.filter(tid => tid != id)])
            setchecked(false) 
        }
        else{
            setremoveTeacher([...removeTeacher,id])
            setchecked(true)
        }
    }


    return (
        <div className="profile-card d-flex py-2" onClick={toggle}>
            <Checkbox color="danger" checked={checked} onChange={toggle}/>
            <Avatar className="ml-3" src={image ? `${BACKEND_URL}/media/${image}` : require("../img/user.png")} />
            <p className="mb-0 py-1 text-xl ml-2">{name}</p>
        </div>
    );
};

export default ProfileCard;

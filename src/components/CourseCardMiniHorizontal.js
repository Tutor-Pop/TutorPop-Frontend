import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'

const PROFILE = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/800px-Solid_blue.svg.png"

const CourseCardMiniHorizontal = ({id,courseName,schoolName,price,remSeat}) => {
  return (
    // mx-2
    <Link className="text-black" to={`/course/${id}`}>
    <div className='course-card-mini-horizontal'>
      <div className='pic'>
      </div>
      <div className='description'>
        <div className='top'>
          <div className='font-bold'>
            {courseName}
          </div>
          <div>
            {schoolName}
          </div>
          <div>
            {price} THB
          </div>
        </div>
        <div className='bot'>
          <div className='text'>
            {remSeat} seats available
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default CourseCardMiniHorizontal

// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';

// export default function CourseCardMiniHorizontal() {
//   const theme = useTheme();

//   return (
//     <Card sx={{ display: 'flex' }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//         <CardContent sx={{ flex: '1 0 auto' }}>
//           <Typography component="div" variant="h5">
//             Live From Space
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary" component="div">
//             Mac Miller
//           </Typography>
//         </CardContent>
//         <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
//         </Box>
//       </Box>
//       <CardMedia
//         component="img"
//         sx={{ width: 151 }}
//         image="/static/images/cards/live-from-space.jpg"
//         alt="Live from space album cover"
//       />
//     </Card>
//   );
// }
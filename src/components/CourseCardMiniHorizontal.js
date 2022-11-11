import React from 'react'
import { Col, Row } from 'reactstrap'

const PROFILE = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/800px-Solid_blue.svg.png"

const CourseCardMiniHorizontal = () => {
  return (
    <div className='course-card-mini-horizontal mx-2 d-flex'>
      <img src={PROFILE} width={118} height={118}></img>

      <div className='course-card-mini-horizontal-description ml-2'>
        <div className='pt-1'>

          <p className='font-bold'>Course Name</p>
          <p>Teacher</p>
          <p>School Name</p>
          <p>200 THB</p>
        </div>
      </div>

    </div>
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
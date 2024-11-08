'use client'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { Box, Button, Grid, IconButton, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { P_DARK, P_LIGHT, P_MID } from '../styles/constantColors';


// Carousel component
const WhatClientSays = () => {

   const cards = [
      { img: '/img2.png', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum ipsum eu ante tristique, at aliquam mauris congue. Duis ut massa ac magna convallis bibendum. Vestibulum auctor sit amet ligula eget rutrum. Ut nec dapibus felis, sit amet lobortis elit. Nam ut leo nec purus venenatis dignissim. Curabitur at mauris quis justo vestibulum placerat. Ut vulputate nisi et risus placerat commodo. Sed consectetur, ipsum id fringilla consectetur, magna nisi commodo eros, nec rhoncus sapien odio eu nisl. Sed sodales lacus at ex ullamcorper,', name: ' Priestly Haward',who:'Parent' },
      { img: '/img2.png', para: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequis aute irure dolor', name: ' Priestly Haward',who:'Parent' },
      { img: '/img2.png', para: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequis aute irure dolor', name: ' Priestly Haward',who:'Parent'},
   ];


   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />, 
      prevArrow: <PrevArrow />, 
   };


   return (
      <Box sx={{ position: 'relative'}}> 
         <Slider {...settings} >
            {cards.map((ele, index) => (
               <Box key={index} sx={{height:450}}>
                  <Grid container justifyContent={'space-between'} flex sx={{}}>
                     <Grid item xs={4} sx={{}}>
                        <Box sx={{ display: 'flex', position: 'relative', height: "350px", alignItems: 'center' }}>
                           <Image src={ele?.img}
                              alt='image'
                              fill
                              style={{ objectFit: 'contain', borderRadius: "7px" }} />
                        </Box>
                     </Grid>
                     <Grid item xs={7.9} sx={{ minHeight: '350px', display: 'flex', alignItems: 'center' }}>
                        <Box>
                           <Typography variant='h6' sx={{ fontSize: '16px', color: 'black', }}>
                              {ele?.para}
                           </Typography>
                           <Box sx={{ mt: '10px' }}>
                              <Typography variant='h6' sx={{ fontSize: '20px', fontWeight: 600, color: 'black', }}>
                                 {ele?.name}
                              </Typography>
                              <Typography variant='h6' sx={{ fontSize: '18px', fontWeight: 500, color: P_DARK, }}>
                                 {ele?.who}
                              </Typography>
                           </Box>
                        </Box>
                     </Grid>
                  </Grid>
               </Box>
            ))}
         </Slider>
      </Box>
   );
};

// Custom right arrow
// const NextArrow = ({ onClick }) => {
//    return (
//       <IconButton onClick={onClick} sx={{ padding:'8px',zIndex: 1, transform: 'translateY(-50%)',bgcolor:P_DARK, '&:hover':{bgcolor:P_DARK}, borderRadius: '50px', }}>
//          <ChevronRightOutlinedIcon sx={{color:'black'}}/>
//       </IconButton>
//    );
// };

// // Custom left arrow
// const PrevArrow = ({ onClick }) => {
//    return (
//       <IconButton onClick={onClick} sx={{padding:'8px', zIndex: 1, transform: 'translateY(-50%)',bgcolor:P_DARK, '&:hover':{bgcolor:P_DARK}, borderRadius: '50px', }}>
//          <ChevronLeftOutlinedIcon sx={{color:'black'}}/>
//       </IconButton>
//    );
// };

const NextArrow = ({ onClick }) => {
   return (
      <IconButton 
         onClick={onClick} 
         sx={{ 
            position: 'absolute', 
            bottom: '50px', 
            right: '0%', 
            transform: 'translateX(50%)', 
            padding: '8px', 
            zIndex: 1, 
            bgcolor: P_DARK, 
            '&:hover': { bgcolor: P_DARK }, 
            borderRadius: '50px', 
         }}
      >
         <ChevronRightOutlinedIcon sx={{ color: 'black' }} />
      </IconButton>
   );
};


const PrevArrow = ({ onClick }) => {
   return (
      <IconButton 
         onClick={onClick} 
         sx={{ 
            position: 'absolute', 
            bottom: '50px', 
            right: '2%', 
            transform: 'translateX(-50%)', 
            padding: '8px', 
            zIndex: 1, 
            bgcolor: P_DARK, 
            '&:hover': { bgcolor: P_DARK }, 
            borderRadius: '50px', 
         }}
      >
         <ChevronLeftOutlinedIcon sx={{ color: 'black' }} />
      </IconButton>
   );
};

export default WhatClientSays;

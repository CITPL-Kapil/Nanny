'use client'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { Box, IconButton, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { P_DARK } from '../styles/constantColors';

const WeOfferCrousal = () => {
   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
   const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

   const cards = [
      { img: '/img3.png', title: 'Babbysitting', subHead: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequis aute irure dolor', reviews: '100' },
      { img: '/img4.png', title: 'Nanny Service', subHead: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequis aute irure dolor', reviews: '80' },
      { img: '/img5.png', title: 'Household Professional Services', subHead: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequis aute irure dolor', reviews: '150' },
   ];

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: isSmallScreen ? 1 : isMediumScreen ? 2 : 3, 
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
   };

   return (
      <Box sx={{ position: 'relative' }}>
         <Slider {...settings}>
            {cards.map((ele, index) => (
               <Box key={index} sx={{ pr: '10px', pl: '10px', width: '100%', boxSizing: 'border-box' }}>
                  <Paper elevation={0} sx={{ overflow: "hidden", background: 'none', width: '100%' }}>
                     <Box sx={{ width: '100%' }}>
                        <Box sx={{ height: "250px", width: '100%', position: 'relative', overflow: 'hidden', borderRadius: '22px' }}>
                           <Image
                              src={ele.img}
                              alt='image'
                              fill 
                              style={{ objectFit: 'cover', borderRadius: "7px" }}
                           />
                        </Box>
                     </Box>
                     <Box sx={{}}>
                        <Box sx={{ p: '10px' }}>
                           <Typography align='center' sx={{ color: '#F2A4A4', fontSize: '17px', fontWeight: 600 }}>{ele.title}</Typography>
                           <Typography align='center' sx={{ fontSize: "16px", color: '#000000', mt: '5px' }}>{ele.subHead}</Typography>
                        </Box>
                     </Box>
                  </Paper>
               </Box>
            ))}
         </Slider>
      </Box>
   );
};

const NextArrow = ({ onClick }) => {
   return (
      <IconButton onClick={onClick} sx={{ position: 'absolute', top: '35%', padding: '8px', right: '-50px', zIndex: 1, transform: 'translateY(-50%)', bgcolor: P_DARK, '&:hover': { bgcolor: P_DARK }, borderRadius: '50px' }}>
         <ChevronRightOutlinedIcon sx={{ color: 'black' }} />
      </IconButton>
   );
};

const PrevArrow = ({ onClick }) => {
   return (
      <IconButton onClick={onClick} sx={{ position: 'absolute', top: '35%', padding: '8px', left: '-50px', zIndex: 1, transform: 'translateY(-50%)', bgcolor: P_DARK, '&:hover': { bgcolor: P_DARK }, borderRadius: '50px' }}>
         <ChevronLeftOutlinedIcon sx={{ color: 'black' }} />
      </IconButton>
   );
};

export default WeOfferCrousal;

'use client'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { Box, Button, IconButton, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { P_DARK, P_LIGHT, P_MID } from '../styles/constantColors';
import './style.css'


// Carousel component
const PartnerCrousal = () => {

   const cards = [
      { img: '/img6.png', title: 'Babbysitting', subHead: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequis aute irure dolor', reviews: '100' },
      { img: '/img7.png', title: 'Nanny Service', subHead: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequis aute irure dolor', reviews: '80' },
      { img: '/img8.png', title: 'Household Professional Services', subHead: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequis aute irure dolor', reviews: '150' },
      { img: '/img9.png', title: 'Household Professional Services', subHead: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequis aute irure dolor', reviews: '150' },
    
    ];


   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false, 
    
   };

   return (
      <Box sx={{ position: 'relative'}}> 
         <Slider {...settings}>
            {cards.map((ele, index) => (
               <Box key={index} sx={{ pr:'10px',pl:'10px',width:'100%',boxSizing:'border-box'}}>
                  <Paper elevation={0} sx={{ overflow: "hidden",background:'none', width: '100%',border:'1px solid #C2C2C2;',borderRadius:'10px'}}>
                     <Box sx={{ width: '100%' }}>
                        <Box sx={{ height: "150px", width: '100%', position: 'relative', overflow: 'hidden', borderRadius: '22px' }}>
                           <Image
                              src={ele.img}
                              alt='image'
                              fill 
                              style={{ objectFit: 'contain', borderRadius: "7px" }}
                           />
                        </Box>
                     </Box>
                    
                  </Paper>
               </Box>
            ))}
         </Slider>
      </Box>
   );
};



export default PartnerCrousal;

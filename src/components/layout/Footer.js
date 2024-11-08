import { Box, Grid, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import styles from '@/components/home/home.module.css'
import MarkunreadIcon from '@mui/icons-material/Markunread';
import CallIcon from '@mui/icons-material/Call';
import { CHOCO_D, P_DARK } from '../styles/constantColors';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import footerLogo from '../../../public/foote_logo.png'



const Footer = () => {
  const y = new Date().getFullYear()
  return (
    <Grid className={styles.footerBg} justifyContent={'center'} container sx={{minHeight:300,pt:'60px'}}>
    <Grid item container justifyContent={'space-between'} xs={10}>
      <Grid item xs={3.91}>
        <Box>
          <Box>
            <Box sx={{ position: 'relative', height: "120px"}}>
              <Image src={footerLogo}
                alt='image'
                
                style={{ borderRadius: "7px",height:'100%',width:'auto'}} />

            </Box>
            <Box>
              <Typography  sx={{ fontSize: "14px",lineHeight:'24px',color:'#000000',p:'5px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum ipsum eu ante tristique, at aliquam mauris congue. Duis ut massa ac magna convallis bibendum. Vestibulum auctor sit amet ligula eget rutrum. Ut nec dapibus felis,</Typography>
            </Box>
          </Box>
        </Box>
      </Grid>

        <Grid item xs={3.85}>
          <Box>
            <Box sx={{ width: '100%',}}>
              <Typography  sx={{ color: CHOCO_D,fontFamily:'"Catamaran", sans-serif',fontWeight:600,fontSize:"18px" }}>Contact Us</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center',mt: '15px'  }}>
            <Box sx={{ border: `1px solid ${CHOCO_D}`, '&:hover': { border: `1px solid ${P_DARK}` }, borderRadius: '50px', width: 'fit-content', padding: '1px' }}>
              <IconButton sx={{ bgcolor: CHOCO_D, padding: '6px', '&:hover': { bgcolor: P_DARK } }}>
                <MarkunreadIcon sx={{ color: 'white', fontSize: '21px' }} />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center',ml:'5px' }}>
              <Typography variant='caption' sx={{}}>Email: info@nannypoppinz.com</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center',mt:'10px' }}>
            <Box sx={{ border: `1px solid ${CHOCO_D}`, '&:hover': { border: `1px solid ${P_DARK}` }, borderRadius: '50px', width: 'fit-content', padding: '1px' }}>
              <IconButton sx={{ bgcolor: CHOCO_D, padding: '6px', '&:hover': { bgcolor: P_DARK } }}>
                <CallIcon sx={{ color: 'white', fontSize: '19px' }} />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center',ml:'5px' }}>
              <Typography variant='caption' >Contact Us: (949) 848-4598</Typography>
            </Box>
          </Box>
        </Grid>

      <Grid item xs={3.8}>
        <Box>
            <Box sx={{ width: '100%',}}>
              <Typography  sx={{ color: CHOCO_D,fontWeight:600,fontSize:"18px" }}>Follow Us on :</Typography>
            </Box>
          </Box>
        <Box>
        <Box sx={{ display: 'flex', alignItems: 'center',mt:'20px' }}>
            <Box sx={{ border: `1px solid ${CHOCO_D}`,mr:'10px', '&:hover': { border: `1px solid ${P_DARK}` }, borderRadius: '50px', width: 'fit-content', padding: '1px' }}>
              <IconButton sx={{ bgcolor: CHOCO_D, padding: '8px', '&:hover': { bgcolor: P_DARK } }}>
                <FaFacebookF style={{ color: 'white', fontSize: '19px' }} />
              </IconButton>
            </Box>

            <Box sx={{ border: `1px solid ${CHOCO_D}`,mr:'10px', '&:hover': { border: `1px solid ${P_DARK}` }, borderRadius: '50px', width: 'fit-content', padding: '1px' }}>
              <IconButton sx={{ bgcolor: CHOCO_D, padding: '8px', '&:hover': { bgcolor: P_DARK } }}>
                <FaInstagram style={{ color: 'white', fontSize: '19px' }} />
              </IconButton>
            </Box>

            <Box sx={{ border: `1px solid ${CHOCO_D}`,mr:'10px', '&:hover': { border: `1px solid ${P_DARK}` }, borderRadius: '50px', width: 'fit-content', padding: '1px' }}>
              <IconButton sx={{ bgcolor: CHOCO_D, padding: '8px', '&:hover': { bgcolor: P_DARK } }}>
                <FaLinkedinIn style={{ color: 'white', fontSize: '19px' }} />
              </IconButton>
            </Box>

            <Box sx={{ border: `1px solid ${CHOCO_D}`,mr:'10px', '&:hover': { border: `1px solid ${P_DARK}` }, borderRadius: '50px', width: 'fit-content', padding: '1px' }}>
              <IconButton sx={{ bgcolor: CHOCO_D, padding: '8px', '&:hover': { bgcolor: P_DARK } }}>
                <FaTiktok style={{ color: 'white', fontSize: '19px' }} />
              </IconButton>
            </Box>
         
          </Box>
        </Box>
      </Grid>

      <Grid item container sx={{borderTop:'1px solid #dee2e6',mt:'57px'}}>
       <Grid item xs={12} sx={{minHeight:'75px',display:'flex',justifyContent:"center",alignItems:'center'}}> 
          <Typography sx={{fontSize:12}}>
             ©{y} - NANNY POPPINZ - A PROFESSIONAL REFERRAL AGENCY SERVING FAMILIES IN 49 STATES - ALL RIGHTS RESERVED
          </Typography>
       </Grid>
    </Grid>
    </Grid>
    </Grid>
  )
}

export default Footer

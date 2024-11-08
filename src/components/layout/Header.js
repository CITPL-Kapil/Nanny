'use client'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import logo from '../../../public/logo.png'
import React, { useState } from 'react'
import Image from 'next/image'
import css from '../home/home.module.css'
import MarkunreadIcon from '@mui/icons-material/Markunread';
import CallIcon from '@mui/icons-material/Call';
import { GiHamburgerMenu } from "react-icons/gi";
import { D_YELLOW, L_YELLOW } from '../styles/constantColors'
import UpsideDrawerHeader from './UpsideDrawerHeader'

const Header = () => {
  const [drawerOpen , setDrawerOpen] = useState({open:false})
  return (
    <>
    <Grid container justifyContent={'center'}>
     <Grid item xs={9.92} sx={{}}>
    <Grid container sx={{height:80}}>
      <Grid item xs={3}>
         <Box className={css.imgBox} >
           <Image className={css.imgLogo} src={logo} alt='logo' style={{}}/>
         </Box>
      </Grid>
      <Grid item xs={1.5}>

      </Grid>
      <Grid item xs={7.5} container alignItems={'center'} justifyContent={'space-between'} sx={{height:'100%'}}>
            <Grid xs={5.5} sx={{}}>
                <Box sx={{display:'flex',alignItems:'center',cursor:"pointer"}}>
                  <Box sx={{border:'1px solid #feeeb8',borderRadius:'50px',width:'fit-content',padding:'1px'}}>
                    <IconButton sx={{bgcolor:L_YELLOW,padding:'13px','&:hover':{bgcolor:D_YELLOW}}}>
                       <MarkunreadIcon  sx={{color:'black',fontSize:'21px'}}/>
                    </IconButton>
                   </Box>
                   <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>
                      <Typography  variant='caption' sx={{}}>Email: info@nannypoppinz.com</Typography>
                   </Box>
                </Box>
            </Grid>

            {/* git added  */}

            <Grid xs={5} sx={{}}>
                <Box sx={{display:'flex',alignItems:'center',cursor:"pointer"}}>
                  <Box sx={{border:'1px solid #feeeb8',borderRadius:'50px',width:'fit-content',padding:'1px'}}>
                    <IconButton sx={{bgcolor:L_YELLOW,padding:'13px','&:hover':{bgcolor:D_YELLOW}}}>
                       <CallIcon  sx={{color:'black',fontSize:'19px'}}/>
                    </IconButton>
                   </Box>
                   <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>
                      <Typography align='center' variant='caption' sx={{width:'100%'}}>Contact Us: (949) 848-4598</Typography>
                   </Box>
                </Box>
            </Grid>
            <Grid item >
                <Box>
                  <IconButton sx={{padding:0}} onClick={()=>{setDrawerOpen({...drawerOpen,open:true})}}>
                    <GiHamburgerMenu style={{color:'black',fontSize:'35px'}}/>
                  </IconButton>
                </Box>
            </Grid>
      </Grid>
    </Grid>

     </Grid>
    </Grid>
    <UpsideDrawerHeader drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
    </>
  )
}

export default Header

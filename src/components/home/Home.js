'use client'
import styles from '@/components/home/home.module.css'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Layout from '../layout/Layout'
import { CHOCO_D, P_DARK, P_LIGHT } from '../styles/constantColors'
import HeroBg from './HeroBg'
import PartnerCrousal from './PartnerCrousal'
import RegistrationForm from './RegistrationForm'
import WeOfferCrousal from './WeOfferCrousal'
import WhatClientSays from './WhatClientSays'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '@/constant'

const Home = () => {
   const [regNanyForm , setRegNanyForm] = useState({})
   const [regFamilyForm , setRegFamilyForm] = useState({})
   // console.log("nany",regNanyForm)
   console.log("family",regFamilyForm)

   const config = {
      headers: {
          'Content-Type': 'application/json',
         //  'Access-Control-Allow-Origin': '*', 
      }
  };

   const submitRegister =async(f)=>{
      console.log("form",f)
      
      const toSend = f == 1 ? regFamilyForm : regNanyForm
      const url = f == 1 ? '/create-family' : '/create-nanny'

      console.log("toSend",toSend)
      // return
      try{
         const resp = await axios.post(`${BASE_URL}${url}`,{...toSend},config)
         console.log("response check",resp)
      }catch(err){
         console.log("error while submitting nanny or family form",err)
      }
   }



   return (
      <Layout>
         <Container maxWidth='xl' disableGutters>
            <Grid container>
               <HeroBg />
            </Grid>
            <Grid container>
               <Grid item xs={12} sm={12} md={6} lg={6}>
                  <RegistrationForm formNo={1} data={regFamilyForm} setData={setRegFamilyForm} submitRegister={submitRegister}/>
               </Grid>
               <Grid item xs={12} sm={12} md={6} lg={6}>
                  <RegistrationForm formNo={2} data={regNanyForm} setData={setRegNanyForm} submitRegister={submitRegister}/>
               </Grid>
            </Grid>
            <Grid container justifyContent={'center'} sx={{ bgcolor: '#f7f4ee',pb:'45px' }}>
               <Grid item xs={12} sx={{mt:'30px'}}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                     <Typography  sx={{fontWeight:900,fontSize:'40px', color: CHOCO_D, letterSpacing: 1, lineHeight: '90px' }}>
                        What We Offer
                     </Typography>
                  </Box>
               </Grid>
               <Grid item xs={10}>
                  <WeOfferCrousal />
                  <Box sx={{display:'flex',justifyContent:'center' }}>
                    <Button  disableElevation variant='contained' sx={{ bgcolor:CHOCO_D,p:'7px 45px',borderRadius:'7px','&:hover': { bgcolor:P_DARK ,} }}>
                       Contact Us
                    </Button>
                </Box>
               </Grid>
            </Grid>
            <Grid className={styles.partnerBg} justifyContent={'center'} container sx={{minHeight:300,pt:'30px',pb:'70px'}}>
               <Grid item xs={10}> 
               <Box sx={{ display: 'flex',flexDirection:'column', justifyContent: 'center',alignItems:'center' }}>
                     <Typography  sx={{fontWeight:700,fontSize:'42px', color:P_DARK}}>
                          Our Trusted Partner
                     </Typography>
                     <Typography  sx={{fontWeight:600,fontSize:'19px', color:P_DARK,}}>
                           in Quality Nanny Services
                     </Typography>
                  </Box>
                  <Box>
                     <PartnerCrousal/>
                  </Box>
               </Grid>
            </Grid>
            <Grid container justifyContent={'center'} sx={{minHeight:'300px',bgcolor:P_LIGHT}}>
               <Grid item xs={10} sx={{mt:'40px'}}>
                  <Box sx={{ display: 'flex',flexDirection:'column', justifyContent: 'center',alignItems:'center' }}>
                     <Typography align='center'  sx={{fontWeight:700,fontSize:'40px', color:CHOCO_D}}>
                         What Our Clients Say About Us
                      </Typography>
                  </Box>
               </Grid>
               <Grid item xs={10} sx={{mt:'20px'}}>
                  <Box sx={{}}>
                     <WhatClientSays/>
                  </Box>
               </Grid>
            </Grid>
         </Container>
      </Layout>
   )
}

export default Home

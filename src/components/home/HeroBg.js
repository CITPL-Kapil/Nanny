import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import styles from '@/components/home/home.module.css'
import Image from 'next/image'
import play from '../../../public/play.png'
import img1 from '../../../public/img1.png'


const HeroBg = () => {
  return (
    <Grid container justifyContent={'center'} alignItems={'center'} className={styles.heroBg}>
      <Grid item container alignItems={'center'} xs={9.9} sx={{height:'65%'}}>
            <Grid item xs={6} sx={{height:'89%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                <Typography  sx={{fontSize:70,fontWeight:1000,color:'#461500',letterSpacing:1,lineHeight:'90px'}}>
                    Nanny Poppinz Your Premier
                </Typography>
                <Typography sx={{fontWeight:500,fontSize:20,letterSpacing:4}}>
                    Destination for care Solutions
                </Typography>

                <Typography  sx={{fontWeight:500,fontSize:14.4,lineHeight:'24px'}}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sollicitudin velit. Pellentesque habitant morbi tristique senectus et netus et malesuada
                </Typography>

                <Box sx={{border:'1px dashed #461500',width:'fit-content','&:hover':{border:'1px dashed #ffd25c'},borderRadius:'12px',p:'1.5px'}}>
                    <Button disableElevation variant='contained' sx={{borderRadius:'12px',color:'black',bgcolor:'#ffe69e','&:hover':{color:'#ffd25c'}}}>
                        Contact Us Now
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={2} sx={{height:"100%"}}>
                <Box sx={{display:'flex',height:"100%",alignItems:'center'}}>
                    <Image src={play} alt='img' sx={{width:'auto',height:'auto',position:'absolute'}}/>
                </Box>
            </Grid>
            <Grid item xs={4} sx={{height:'100%'}}>
            <Box sx={{height:"100%",display:"flex",alignItems:'center',justifyContent:'center'}}>
                    <Image src={img1} alt='img' width={335}  />
                </Box>
            </Grid>
      </Grid>
    </Grid>
  )
}

export default HeroBg

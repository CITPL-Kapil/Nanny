'use client'
import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, InputBase, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from '@/components/home/home.module.css'
import { P_DARK, P_LIGHT, P_MID, Y_DARK, Y_LIGHT } from '../styles/constantColors'
import emailValidator from '@/utils/emailValidator'

const RegistrationForm = ({formNo,data,setData,submitRegister}) => {
    const [value, setValue] = useState('text');
    const [err , setErr] = useState(false)
    const [isValidEmailAdd , setIsValidEmailAdd] = useState(false)
    const formTheme = {form2BoxBg:'#fef3f3',form2InputBg:'#fde4e4',formTxtColor:'#e28383'}
    const inputCss = {'&.Mui-focused': { boxShadow: '0 0 0 4px rgba(30,144,255, 0.3)', }, '& input::placeholder': { color: 'black', opacity: 1, }, }
    const radioCss = { color: 'gray', '&.Mui-checked': { color: 'black' }, '&.Mui-focusVisible': { outline: '2px solid black', outlineOffset: '2px', }, }


    const handleChange = (event) => {
        setValue(event.target.value);
        console.log("preferred_mean_of_communication",event.target.value)
    };

    const handleUpdateValues = (e) => {
        const { name, value } = e.target;
    
        if ((name === 'zip_code' || name === 'service_zip_code') && value.length > 5) {
            return;
        }
        if (name === 'phone_number' && value.length > 10) {
            return;
        }
        setData((prevData) => ({ ...prevData, [name]: value }));
        setErr(false);
        setIsValidEmailAdd(false);  
    
    };

    const handleSubmit =()=>{
        if(!data?.first_name || !data?.email_address || !data?.phone_number || !data?.password || !data?.confirm_password || !data?.zip_code || !data?.service_zip_code){
           return setErr(true)
        }
        const isValidEmail = emailValidator(data?.email_address);

        if(!isValidEmail){
            //  console.log("isValidEmail",isValidEmail)
            setErr(true)
            setIsValidEmailAdd(true)
            return 
        }
        setIsValidEmailAdd(false)
        if(data?.password !== data?.confirm_password){
            return setErr(true)
        }

        if(data?.zip_code?.length < 5 || data?.service_zip_code?.length < 5 || data?.phone_number?.length < 10){
            return setErr(true)
        }
        setErr(false)
        setData({...data,preferred_mean_of_communication:value})
        submitRegister(formNo)
    }

    // console.log("isValidEmailAdd outside",isValidEmailAdd)

    return (
        <Grid container justifyContent={'center'} sx={{bgcolor:formNo == 2 ? formTheme?.form2BoxBg : 'white'}}>
            <Grid item xs={7.6} sx={{p:'50px 0px'}}>
                <Box sx={{mb:'5px'}}>
                    <Typography align='center' variant='h5' sx={{}}>
                        Register Now
                    </Typography>
                    <Typography align='center' variant='h6' sx={{color:formNo == 2 ? P_DARK : Y_DARK}}>
                        {formNo == 1 ? 'For Families' : 'For Nannies'}
                    </Typography>
                </Box>
                <Grid container spacing={2} sx={{}}>
                    <Grid item xs={12}>
                        <InputBase autoComplete='off' className={styles.inputF}  placeholder='Full Name' name='first_name' value={data?.first_name || ''}  fullWidth sx={{...inputCss,bgcolor : formNo == 2 ? P_MID : Y_LIGHT}} onChange={handleUpdateValues} />
                        {
                            (err && !data?.first_name) &&
                            <Box sx={{ textAlign: 'right' }}>
                                <Typography variant="caption" color="error" sx={{ marginTop: '4px',fontSize:'12px' }}>FullName is required.</Typography>
                            </Box>
                        }
                    </Grid>
                    <Grid item xs={6}>
                        <InputBase autoComplete='off' className={styles.inputF} placeholder='Email' name='email_address' value={data?.email_address || ''} fullWidth sx={{...inputCss,bgcolor : formNo == 2 ? P_MID : Y_LIGHT}} onChange={handleUpdateValues}/>
                        {
                            (err && !data?.email_address || isValidEmailAdd) &&
                            <Box sx={{ textAlign: 'right' }}>
                                <Typography variant="caption" color="error" sx={{ marginTop: '4px',fontSize:'12px' }}>{isValidEmailAdd ? 'Please enter valid email.' : 'Email address is required.'}</Typography>
                            </Box>
                        }
                    </Grid>
                    <Grid item xs={6}>
                        <InputBase autoComplete='off' className={styles.inputF} type='number' placeholder='Phone Number' name='phone_number' value={data?.phone_number || ''} fullWidth sx={{...inputCss,'& input': {MozAppearance: 'textfield',},'& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button': {WebkitAppearance: 'none',margin: 0,},bgcolor : formNo == 2 ? P_MID : Y_LIGHT}} onChange={handleUpdateValues}/>
                        {
                            (err && (!data?.phone_number || data?.phone_number?.length < 10) ) &&
                            <Box sx={{ textAlign: 'right' }}>
                                <Typography variant="caption" color="error" sx={{ marginTop: '4px',fontSize:'12px' }}> {data?.phone_number?.length < 10 ? 'Phone Number must be 10 digits.' : 'Phone Number is required.'}</Typography>
                            </Box>
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <InputBase autoComplete='off' className={styles.inputF} placeholder='Password' name='password' value={data?.password || ''} fullWidth sx={{...inputCss,bgcolor : formNo == 2 ? P_MID : Y_LIGHT}} onChange={handleUpdateValues}/>
                        {
                            (err && !data?.password) &&
                            <Box sx={{ textAlign: 'right' }}>
                                <Typography variant="caption" color="error" sx={{ marginTop: '4px',fontSize:'12px' }}>Please enter Password.</Typography>
                            </Box>
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <InputBase autoComplete='off' className={styles.inputF} placeholder='Re-Type Password' name='confirm_password' value={data?.confirm_password || ''} fullWidth sx={{...inputCss,bgcolor : formNo == 2 ? P_MID : Y_LIGHT}} onChange={handleUpdateValues}/>
                        {
                            (err && (!data?.confirm_password || data?.password !== data?.confirm_password)) &&
                            <Box sx={{ textAlign: 'right' }}>
                                <Typography variant="caption" color="error" sx={{ marginTop: '4px',fontSize:'12px' }}>{data?.password !== data?.confirm_password ? 'Passwords do not match.' : 'Please confirm password.'}</Typography>
                            </Box>
                        }
                    </Grid>

                    <Grid item xs={6}>
                        <InputBase autoComplete='off' type='number' className={styles.inputF} placeholder='Home Zip Code' name='zip_code' value={data?.zip_code || ''} fullWidth sx={{...inputCss,'& input': {MozAppearance: 'textfield',},'& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button': {WebkitAppearance: 'none',margin: 0,},bgcolor : formNo == 2 ? P_MID : Y_LIGHT}} onChange={handleUpdateValues}/>
                        {
                            (err && (!data?.zip_code || data?.zip_code?.length < 5) ) &&
                            <Box sx={{ textAlign: 'right' }}>
                                <Typography variant="caption" color="error" sx={{ marginTop: '4px',fontSize:'12px' }}>{data?.zip_code?.length < 6 ? 'Zipcode must be 6 digits.' : 'ZipCode is required.'}</Typography>
                            </Box>
                        }
                    </Grid>
                    <Grid item xs={6}>
                        <InputBase autoComplete='off' type='number' className={styles.inputF} placeholder='Service Zip Code' name='service_zip_code' value={data?.service_zip_code || ''} fullWidth sx={{...inputCss,'& input': {MozAppearance: 'textfield',},'& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button': {WebkitAppearance: 'none',margin: 0,},bgcolor : formNo == 2 ? P_MID : Y_LIGHT}} onChange={handleUpdateValues}/>
                        {
                            (err && (!data?.service_zip_code || data?.service_zip_code?.length < 5) ) &&
                            <Box sx={{ textAlign: 'right' }}>
                                <Typography variant="caption" color="error" sx={{ marginTop: '4px',fontSize:'12px' }}>{data?.service_zip_code?.length < 6 ? 'Zipcode must be 6 digits.' : 'Service zipcode is required.'}</Typography>
                            </Box>
                        }
                    </Grid>
                </Grid>
                <Box sx={{ mt: '10px' }}>
                    <Typography variant='body1'>
                        What is your preferred means of communication?
                    </Typography>
                </Box>
                <Box>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                            sx={{ display: 'flex', flexDirection: 'row' }}
                        >
                            <FormControlLabel value="text" control={<Radio size='small' sx={radioCss} />} label="Text" />
                            <FormControlLabel value="email" control={<Radio size='small' sx={radioCss} />} label="Email" />
                            <FormControlLabel value="phone" control={<Radio size='small' sx={radioCss} />} label="Phone" />

                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box sx={{ mt: '10px' }}>
                    <Button className={styles.customBtn} disableElevation variant='contained' sx={{border: `1px solid ${formNo == 2 ? P_MID : '#ffd25c'}`, bgcolor:formNo == 2 ? formTheme.formTxtColor : '#ffd25c', '&:hover': { bgcolor:formNo == 2 ? formTheme.form2InputBg : Y_DARK , border: `1px solid ${formNo == 2 ? formTheme.formTxtColor : '#ffd25c'}`, color: 'black' } }} onClick={handleSubmit}>
                        Submit Now
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default RegistrationForm

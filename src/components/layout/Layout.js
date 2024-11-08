import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <Box>
      <Header/>
       {children}
      <Footer/>
    </Box>
  )
}

export default Layout

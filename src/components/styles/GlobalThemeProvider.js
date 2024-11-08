'use client'
import { ThemeProvider } from '@emotion/react'
import React from 'react'
import theme from './theme'
import '../../app/globals.css';

const GlobalThemeProvider = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
       {children}
    </ThemeProvider>
  )
}

export default GlobalThemeProvider

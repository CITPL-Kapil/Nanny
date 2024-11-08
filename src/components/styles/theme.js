import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontWeight: 900, 
    },
    h2: {
      fontWeight: 800, 
    },
    h3: {
      fontWeight: 700, 
    },
    h4: {
      fontWeight: 600, 
    },
    h5: {
      fontWeight: 600, 
      fontSize:20
    },
    h6: {
      fontWeight: 500, 
    },
    body1: {
      fontWeight: 500,
      fontSize:14 
    },
    body2: {
      fontWeight: 500, 
      fontSize:16
    },
    caption: {
      fontWeight: 500,
      fontSize:15.2
    },
    button:{
      fontWeight: 500, 
      fontSize: '1rem', 
      textTransform: 'none',
      borderRadius:'12px',
      color:'#212529'
    }
  },
 
  
});

export default theme;
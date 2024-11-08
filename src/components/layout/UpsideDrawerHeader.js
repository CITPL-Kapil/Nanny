import { Button, Grid, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { ImCross } from "react-icons/im";
import LoginIcon from '@mui/icons-material/Login';


const UpsideDrawerHeader = ({drawerOpen , setDrawerOpen})=> {


  const toggleDrawer = () => {

    setDrawerOpen({ ...drawerOpen,open:!drawerOpen?.open });
  };

  const list = () => (
    <Grid container
      sx={{ width: 'auto',color:'#fff',mt:'40px'}}
      role="presentation"
      justifyContent={'center'}
   
    >
    <Grid item xs={12} sm={12} md={10} lg={10} sx={{p:'0px 5px'}}> 
    <Box sx={{display:"flex",justifyContent:'space-between'}}>
      <List sx={{padding:0}}>
        {['Home', 'About Us', 'Contact Us'].map((text, index) => (
          <ListItem key={text} disablePadding  sx={{padding:0,mb:'20px'}}>
            <ListItemButton  sx={{padding:0}}>
              <ListItemText primary={text} primaryTypographyProps={{ fontSize: '16px', fontWeight:500 }}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{height:'fit-content',mt:'7px'}}>
        <IconButton onClick={()=>{  setDrawerOpen({ ...drawerOpen,open:!drawerOpen?.open });}}>
           <ImCross style={{color:'white',fontSize:'1.3rem'}}/>
        </IconButton>
      </Box>
    </Box>
    <Box sx={{mt:'30px',display:'flex',alignItems:'center'}}>
        <Button variant='outlined' sx={{display:'flex',alignItems:'center',fontSize:'15px',p:'8px 32px',outlineColor:"white",color:'white',borderColor:'white',mr:'15px',borderRadius:25,'&:hover':{color:'#0d6efd'}}}><LoginIcon sx={{fontSize:'16px',mr:'3px'}}/>Sign Up</Button>
        <Button variant='outlined' sx={{display:'flex',alignItems:'center',fontSize:'15px',p:'8px 32px',outlineColor:"white",color:'white',borderColor:'white',borderRadius:25,'&:hover':{color:'#0d6efd'}}}><LoginIcon sx={{fontSize:'16px',mr:'3px'}}/>Login</Button>

    </Box>
    </Grid>
    </Grid>
  );

  return (
    <>
        <SwipeableDrawer
        anchor={'top'}
        open={drawerOpen?.open}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            boxShadow: 'none', 
          }
        }}
      >
            {list()}
           
          </SwipeableDrawer>
    </>
  );
}

export default  UpsideDrawerHeader
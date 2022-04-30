import React from 'react';
import {Grid,Paper,Avatar,TextField,Button,Typography,Link,CssBaseline} from '@material-ui/core'
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';

function Signin() {
    const paperstyle={padding:20,height:'70vh',margin:"20px auto",width:280}
    const avatarstyle={backgroundColor:'#8eb2d4'}
    const btnstyle={margin:"8px 0"}
  return <Grid >
      <CssBaseline/>
        <Paper elevation={"5"} style={paperstyle}>
        <Grid align="center">
            <Avatar style={avatarstyle}><LockClockOutlinedIcon/></Avatar>
            <h2>Sign In</h2>
           
            <TextField label='Username' placeholder='Enter username' type='email' fullWidth required/>
            <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
            <Button type='submit'color="primary" variant='contained' fullWidth style={btnstyle}>Sign In</Button>
            <Typography>
              <Link href='#'>Forgot Password</Link>
            </Typography>;  
            <Typography>Do you have an account?
              <Link href='#'>signup</Link>
            </Typography>;      
        </Grid>
        </Paper>

        </Grid>
}

export default Signin;

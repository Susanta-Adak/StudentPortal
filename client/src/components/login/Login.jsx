import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';

import { studentLogin } from '../../actions/studentActions';


const Login = () => {
    const [loginData, setLoginData] = useState({ studentId: '', password: '' });
    const dispatch = useDispatch();
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(studentLogin(loginData));
        
    }
    const student = useSelector((state)=> state.student);
    const handleClick = () => {
        
        console.log(student);
    }
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={3}>
                    <form autoComplete='off' onSubmit={handleSubmit}>
                        <Stack spacing={2} sx={{ backgroundColor: "" }}>
                            <h3>LogIn</h3>
                            <TextField id="outlined-basic" label="Student ID" variant="outlined" onChange={(e)=> setLoginData({...loginData, studentId: e.target.value})} />
                            <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e)=> setLoginData({...loginData, password: e.target.value})} />
                            <Button variant="contained" type='submit'>Login</Button>
                            <Button variant="contained" onClick={handleClick}>print</Button>
                        </Stack>
                    </form>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Login;
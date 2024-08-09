import React from 'react'
import { Card,CardContent,CardMedia,Container,Grid,TextField,
    FormControl,InputLabel,Select
 } from '@mui/material'


const Flags = () => {
  return (
    <Container>
        <Grid container spacing={3} mt={5}>
         <Grid item md={6}>
         <TextField label="Busca tu pais" fullWidth />
         </Grid>
        </Grid>
      
    </Container>
  )
}

export default Flags

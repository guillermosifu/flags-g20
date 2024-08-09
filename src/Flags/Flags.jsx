import React from 'react'
import { Card,CardContent,CardMedia,Container,Grid,TextField,
    FormControl,InputLabel,Select,MenuItem
 } from '@mui/material'


const Flags = () => {
  return (
    <Container>
        <Grid container spacing={3} mt={5}>
         <Grid item md={6}>
         <TextField label="Busca tu pais" fullWidth />
         </Grid>
         <Grid item md={6}>
         <FormControl fullWidth>
         <InputLabel>Filter by Region</InputLabel>
         <Select label="Busca Region" fullWidth >
          <MenuItem value={"africa"}>Africa</MenuItem>
          <MenuItem value={"america"}>America</MenuItem>
          <MenuItem value={"asia"}>Asia</MenuItem>
          <MenuItem value={"europe"}>Europe</MenuItem>
          <MenuItem value={"oceania"}>Oceania</MenuItem>   
            </Select>
            </FormControl>
         </Grid>
        </Grid>      
    </Container>
  )
}

export default Flags

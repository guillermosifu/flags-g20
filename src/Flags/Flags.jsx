import React, { useEffect, useState } from 'react'
import { Card,CardContent,CardMedia,Container,Grid,TextField,
    FormControl,InputLabel,Select,MenuItem
 } from '@mui/material'
import { getFlags } from '../service'


const Flags = () => {
 const[countries,setCountries]=useState([]);
 const[region,setRegion]=useState("")

const fetchCountries=async(url)=>{
    const response = await getFlags(url)
    setCountries(response)
   console.log(response)
}

const handleRegion =async (e)=>{
setRegion(e.target.value);
if(e.target.value === "all"){
    fetchCountries();
    return
}
setCountries([]);
const response =await getFlags(
  `https://restcountries.com/v3.1/region/${e.target.value}`
);
setCountries(response)
}
//vamos  crear el filtro pa la busqued del pais 
const handleCountry =(e)=>{
  const countryName = e.target.value
  if(countryName.length === 0){
    fetchCountries()
  }
  if(countryName >=3){
    const filterCountries = countries.filter((country)=>
      country.name.common.toUpperCase().includes(countryName.toUpperCase())
    );
    setCountries(filterCountries)
  }

}




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
         <MenuItem value="all">Todas les regiones</MenuItem> 
          <MenuItem value="africa">Africa</MenuItem>
          <MenuItem value="america">America</MenuItem>
          <MenuItem value="asia">Asia</MenuItem>
          <MenuItem value="europe">Europe</MenuItem>
          <MenuItem value="oceania">Oceania</MenuItem>   
            </Select>
            </FormControl>
         </Grid>
        </Grid>      
    </Container>
  )
}

export default Flags

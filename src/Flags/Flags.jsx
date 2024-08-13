import React, { useEffect, useState } from 'react'
import { Card,CardContent,CardMedia,Container,Grid,TextField,
    FormControl,InputLabel,Select,MenuItem
 } from '@mui/material'
import { getFlags } from '../service'
import { Link } from 'react-router-dom'



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
  if(countryName.length >=3){
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
         <TextField label="Busca tu pais" fullWidth onChange={handleCountry} />
         </Grid>
         <Grid item md={6}>
         <FormControl fullWidth>
         <InputLabel>Filter by Region</InputLabel>
         <Select onChange={handleRegion} label="Busca Region" fullWidth >
         <MenuItem value="all">Todas las regiones</MenuItem> 
          <MenuItem value="africa">Africa</MenuItem>
          <MenuItem value="america">America</MenuItem>
          <MenuItem value="asia">Asia</MenuItem>
          <MenuItem value="europe">Europe</MenuItem>
          <MenuItem value="oceania">Oceania</MenuItem>   
            </Select>
            </FormControl>
         </Grid>
         {countries.length > 0 ? (
          countries.map((country)=>(
            <Grid item md={3}>
              <Link to={`/flags/detail/${country.name.common}`}>
              <Card>
                <CardMedia
                component="img"
                height={200}
                image={country.flags.svg}/>
                <CardContent>
                  <h4>{country.name.common}</h4>
                  <p>population:{country.population}</p>
                  <p>Region:{country.region}</p>
                  <p>Capital:{country.capital}</p>
                </CardContent>
              </Card>
              </Link>
            </Grid>
          ))
         ):(<div>
          <h4>cargando..</h4>
         </div>)}
        </Grid>     
    </Container>
  )
}

export default Flags

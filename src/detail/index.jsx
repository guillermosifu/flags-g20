import React, { useEffect, useState } from "react"
import { Container,Grid,Button } from "@mui/material"
import { useNavigate,useParams } from "react-router-dom"
import { getFlags } from "../service"




const Detail = ()=>{
const history = useNavigate();
const {name} = useParams()

const[country,setCountry]=useState({})

const fetchCountry =async ()=>{
 const response = await getFlags(
    `https://restcountries.com/v3.1/name/${name}`
 )
 setCountry([0])
}

useEffect(()=>{
fetchCountry()
},[])


return(
<Container>
    <Button variant="outlined" onClick={()=>history(-1)}>
        Back
    </Button>
    {Object.keys(country).length > 0 &&(
        <Grid container spacing={3}>
            <Grid item md={6}>
        <img src={country.flags.svg} width={400} alt="" />
            </Grid>
        </Grid>
    )}
</Container>
)


}
export default Detail;
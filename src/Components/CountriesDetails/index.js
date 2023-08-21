import './index.css'

import { useParams,Link } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import { getCountriesDetails } from '../../Services' 
import {BsBuildingsFill} from 'react-icons/bs' 
import{FcPortraitMode,FcCurrencyExchange} from 'react-icons/fc' 
import {TbLanguage} from 'react-icons/tb' 
import Button from 'react-bootstrap/Button';
import {AiOutlineHome} from 'react-icons/ai'



export default function CountriesDetails(props) {
    const { countryCode } = useParams()
    const [Details, setDetails] = useState({})
    const [Loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getCountriesDetails(countryCode).then(response => {
            setLoading(false)
            setDetails(response.data) 


        }) 
        
    }, [countryCode])

    return (
        <>
        {
            Loading? (
                <div className="loader-container">
          <div className="spinner"></div>
        </div>
            ):(
        <div className='countriesContainer'>
        <h1 className='heading'>Country Details</h1>
        <div className='detailsCard'>
            <div className="imgContainer">
                <img className='img' src={Details.flags?.png} alt={Details.name} />
            </div>
            <div className="details">
                <h1 className='name'>{Details.name} | {Details.nativeName} </h1>
                <br />
                <h1 className=''><BsBuildingsFill/>  {Details.capital}</h1>
                
                <h1><FcPortraitMode/>  {Details.population}</h1>
                <h1>Independent : {Details.independent?"True" : "False"}</h1> 
                <h1> <FcCurrencyExchange/> {Details.currencies?.map(each =>(each.name)).join(',')}</h1>
                <h1> <TbLanguage/> : {Details.languages?.map(each =>(each.name)).join(',')}</h1>
                <h1>Region : {Details.region}</h1>
                  </div>
        
            
        
        </div> 


       <div className="button">
       <Link to={"/"}>
       <Button variant="primary" type='button' className='HomeButton'><AiOutlineHome/>
       </Button>
       </Link>
       </div>
       
        
        
        </div>
       

            )
        }
        </>

    )
}

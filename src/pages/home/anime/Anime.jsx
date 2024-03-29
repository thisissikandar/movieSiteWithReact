import React from 'react'
import ContentWrapper from './../../../components/contentWrapper/ContentWrapper';
import Carousel from '../../../components/carousel/Carousel';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import { useState } from 'react'
import useFetch from '../../hooks/useFetch'


const Anime = () => {

    const [endpoint, setEndpoint] = useState("movie")
    const {data , loading} = useFetch(`/genre/${mediaType}/anime`)
   
   
     const onTabChange =(tab)=>{
           setEndpoint(tab === "Movies" ? "movie" :"tv")
     
         }


  return (
    <div className='carouselSection'>
    <ContentWrapper>
        <span className='carouselTitle'> Top Rated</span>
        <SwitchTabs data={
            ["Movies", "TV Shows"]
        }
         onTabChange={onTabChange} />

    </ContentWrapper>

    <Carousel data={data?.results} loading={loading} 
    endpoint={endpoint}
    />
</div>
  )
}

export default Anime
import React from 'react'
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { MoviesHolder } from '../pages/Home/HomeStyles';



const SearchMovieList = ({searchedMovies}) => {


    
    if (searchedMovies?.length > 0) {
        return (
            <Splide options={{
                perPage:5,
                breakpoints: {
                    640: {
                        perPage: 2,
                    },
                    768:{
                        perPage: 3,
                    }
                },
                arrows:false,
                pagination:false,
                drag:"free",
                gap: "1rem"
   
           
           }}>
   
           {searchedMovies.map((theSearchedMovie, index) => {
   
   return <SplideSlide key={index}>
   <MoviesHolder className='ml-[8rem] mt-[5rem] w-[160px] h-[160px] md:w-[160px] md:h-[160px] lg:w-[200px] rounded-[12px]' style={{ backgroundImage:`url(${theSearchedMovie.Poster})` }}>
   
   <div className='w-[200px] h-[200px] flex justify-center items-center text-center break-keeps rounded-[12px]'>
   
       <p className='text-white font-bold text-[18px]'>{theSearchedMovie.Title}</p>
   
   </div>
   
   </MoviesHolder>
   </SplideSlide>
   })
   
   }
   </Splide>
   
        )
        
    }if (searchedMovies?.length === 0) {
      
            return (
                <p>No Response found</p>
            )
     
    }
 
}

export default SearchMovieList
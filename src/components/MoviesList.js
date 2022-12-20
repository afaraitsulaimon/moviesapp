import React from 'react'
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { MoviesHolder } from '../pages/Home/HomeStyles';

const MoviesList = ({movies, series}) => {
  return (
    <div>
        
{/*Movies category start from here */}

<p className='pt-10 pb-3 pl-[8rem]'>Movie Category Type</p>

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
            {movies.map((theMovie, index) => {

                return  <SplideSlide key={index}>
                
                <MoviesHolder className='ml-[8rem] w-[160px] h-[160px] md:w-[160px] md:h-[160px] lg:w-[200px]  rounded-[12px]' style={{ backgroundImage:`url(${theMovie.Poster})` }} >

                    <div className='w-[200px] h-[200px] flex justify-center text-center items-center rounded-[12px]'>
                   
                        <p className='font-bold text-white text-[18px]'>{theMovie.Title}</p>
    
                    </div>
    
                </MoviesHolder>

                </SplideSlide>
            })
               
            }
        </Splide>

{/*Movies category ends here */}
    


{/* for another category which is the series category start from here */}
        <p className='pt-10 pb-3 pl-[8rem]'>Series Category Type</p>
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

        {series.map((theSeriesMovie, index) => {

return <SplideSlide key={index}>
<MoviesHolder className='ml-[8rem] w-[160px] h-[160px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] rounded-[12px]' style={{ backgroundImage:`url(${theSeriesMovie.Poster})` }}>

<div className='w-[200px] h-[200px] flex justify-center items-center text-center break-keeps rounded-[12px]'>

    <p className='text-white font-bold text-[18px]'>{theSeriesMovie.Title}</p>

</div>

</MoviesHolder>
</SplideSlide>
})

}
</Splide>

{/* for another category which is the series category ends here */}

        {/* <MoviesHolder className='ml-[8rem]'>
        <p className='pt-10 pb-2'>Movie Category</p>
            <div className='w-[200px] h-[200px] flex justify-center items-center rounded-[12px] bg-yellow-600'>
                <p>musical schools</p>

            </div>

         

        </MoviesHolder> */}

      
    </div>
  )
}

export default MoviesList
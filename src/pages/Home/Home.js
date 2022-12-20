import React, { useEffect, useState } from 'react';
import { Container, NavBar, LogoHolder, HeroHolder, HeroContentHolder, SearchHolder } from './HomeStyles';
import Logo from '../../assets/images/Logo.png'
import background from "../../assets/images/hero-bg.png";
import axios from 'axios';

import MoviesList from '../../components/MoviesList';
import SearchMovieList from '../../components/SearchMovieList';

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {

       

        const moviesUrl = 'https://www.omdbapi.com/?i=tt3896198&plot=full&s=title&apikey=406e54e4';
        const seriesUrl = 'https://www.omdbapi.com/?i=tt3896198&plot=full&s=series&apikey=406e54e4';
 

        // const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=406e54e4';
        axios.get(moviesUrl).then((resp)=> setMovies(resp.data.Search)).catch((err) => console.log(err));

        //get the series movies
        axios.get(seriesUrl).then((resp)=> setSeries(resp.data.Search)).catch((err) => console.log(err));


    },[])

    
    
    const handleSearch = async (e) => {
        setSearchText(e.target.value);
        
        const urlSearch = `https://www.omdbapi.com/?i=tt3896198&plot=full&s=${searchText}&apikey=406e54e4`;
       axios.get(urlSearch).then((resp)=> setSearchedMovies(resp.data.Search)).catch((err) => console.log(err));

// console.log(searchedMovies.length);
console.log(searchedMovies);
        
    }

  return (

        <Container className="w-full">
            <NavBar className="w-full h-[4rem] bg-[#292929]">
                    <LogoHolder src={Logo} alt='company-logo' />

                 
            </NavBar>

            <HeroHolder className="w-full h-[450px]" style={{ backgroundImage: `url(${background})` }}>
                {/* <img src={bgg} alt='theHero bg'/> */}
                
                <HeroContentHolder className="">
                        <p className='text-[3rem] leading-[60px] break-keep font-sans font-bold text-white'>
                            Watch Something Incredible.
                        </p>

                </HeroContentHolder>

            </HeroHolder>

            <SearchHolder className='flex flex-col mt-5'>

                        <label className='pl-[8rem] pb-2 font-normal text-[1.2rem]'>Search</label>
                        <div className='flex  justify-center items-center '>
                        <input type='text' className='w-[80%] h-[2.5rem] box-border border-[1px] border-solid border-[#000000]'
                            onChange={handleSearch} value={searchText}
                         />

                        </div>

            </SearchHolder>


        {
            searchedMovies?.length === 0 && searchText === "" ? 
            <section className='mb-12'>
    
            <MoviesList movies={movies} series={series} /> 
            
            </section> :
            <section className='mb-12'><SearchMovieList searchedMovies={searchedMovies} /> </section> 
           
        }
        </Container>

  )
}

export default Home
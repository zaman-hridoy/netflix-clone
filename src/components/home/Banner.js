import React, { useState, useEffect } from 'react';
import axios from '../../utls/axios';
import requests from '../../utls/config';

import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const randomNum = Math.floor(Math.random() * request.data.results.length-1);
            setMovie([request.data.results[randomNum]])
        }
        fetchData();
    }, []);
    const truncate = (str, n) => str?.length > n ? str.substr(0, n-1) + '...' : str;
    return (
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: movie.length !==0 ? (movie[0]?.backdrop_path ? `url(https://image.tmdb.org/t/p/original/${movie[0].backdrop_path})` : 'url(/asstes/images/no_image.png)') : 'url(/asstes/images/no_image.png)',
            backgroundPosition: 'center center'
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie[0]?.title || movie[0]?.name || movie[0]?.original_name}</h1>
                <div className="banner__buttons">
                    {/* <button className="banner__button">
                        <Icon name="play circle" size="large" />
                    </button> */}
                    <Link to={`/tv/${movie[0]?.id}`}>
                        <button className="banner__button_details">Details</button>
                    </Link>
                </div>
                <p className="banner_description">
                    {truncate(movie[0]?.overview, 150)}
                </p>
            </div>
            <div className="banner__fade_bottom"></div>
        </header>
    );
}

export default Banner;

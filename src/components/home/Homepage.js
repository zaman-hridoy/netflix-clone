import React, { Fragment } from 'react';
import requests from '../../utls/config';

import Banner from './Banner';
import MovieRow from './MovieRow';

const Homepage = () => {
    return (
        <Fragment>
            <Banner />
            <MovieRow 
                title="Netflix Originals" 
                fetchUrl={requests.fetchNetflixOriginals} 
                isLargeRow={true}
                type="tv"
            />
            <MovieRow title="Trending" type="movie" fetchUrl={requests.fetchTrending} />
            <MovieRow title="Top Rated" type="movie" fetchUrl={requests.fetchTopRated} />
            <MovieRow title="Action Movies" type="movie" fetchUrl={requests.fetchActionsMovies} />
            <MovieRow title="Comedy Movies" type="movie" fetchUrl={requests.fetchComedyMovies} />
            <MovieRow title="Horror Movies" type="movie" fetchUrl={requests.fetchHorrorMovies} />
            <MovieRow title="Romance Movies" type="movie" fetchUrl={requests.fetchRomanceMovies} />
            <MovieRow title="Documentaries" type="movie" fetchUrl={requests.fetchDocumentaries} />
        </Fragment>
    );
}

export default Homepage;

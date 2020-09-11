import React, { useState, useEffect } from 'react';
import axios from '../../utls/axios';
import './MovieRow.css';
import EachRow from './EachRow';


const MovieRow = ({title, fetchUrl, isLargeRow, type}) => {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condition or change of a variable
    useEffect(() => {
        // if [], run once when this component loads and don't run again
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    return <EachRow movies={movies} title={title} isLargeRow={isLargeRow} type={type} />
}

export default MovieRow;

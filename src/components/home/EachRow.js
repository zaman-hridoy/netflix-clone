import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { horizontalSlideRight, horizontalSlideleft, stopTabScroll } from '../../utls/scroll.js';
import { Icon } from 'semantic-ui-react';

const image_baseUrl = 'https://image.tmdb.org/t/p/original';
// const image_baseUrl = 'https://image.tmdb.org/t/p/w500';

class EachRow extends Component {

    render() {
        const { movies, title, isLargeRow, type } = this.props;
        
        return (
            <div className="row">
                <h2 className="row__title">{title}</h2>
                <div className="scroll_section">
                <div className="left_scroll_handler"
                    onMouseEnter={() => horizontalSlideleft(this.row__posters)}
                    onMouseLeave={() => stopTabScroll(this.row__posters)}
                >
                    <Icon name="angle left" />
                </div>
                <div className="row__posters" ref={node => this.row__posters=node}>
                    {movies.map(movie => (
                        <Link key={movie.id}  to={`/${type}/${movie.id}`}>
                            <img 
                                className={`row__poster ${isLargeRow && 'row__poster__large'}`} 
                                src={`${isLargeRow ? (movie.poster_path ? image_baseUrl+movie.poster_path : '/assets/images/no_image.jpg') : (movie.backdrop_path ? image_baseUrl+movie.backdrop_path : '/assets/images/no_image.jpg')}`} 
                                alt={movie.title}
                            />
                        </Link>
                    ))}
                </div>
                <div className="right_scroll_handler"
                    onMouseEnter={() => horizontalSlideRight(this.row__posters)}
                    onMouseLeave={() => stopTabScroll(this.row__posters)}
                >
                    <Icon name="angle right" size="large" />
                </div>
                </div>
            </div>
        )
    }
}

export default EachRow;
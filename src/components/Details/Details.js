import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { Grid, Container, Label, Button, Header, Feed, Modal } from 'semantic-ui-react';
import axios from '../../utls/axios';
import { API_KEY } from '../../utls/config';

import './Details.css';

const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

const Details = ({ match }) => {
    const [getDetails, setDetails] = useState(null);
    const [getReviews, setReviews] = useState(null);
    const [open, setOpen] = useState(false); // for modal
    const [youtubeId, setYoutubeId] = useState('2g811Eo7K8U')

    // get details
    useEffect(() => {
        const getData = async () => {
            const request = await axios.get(`/${match.params.type}/${match.params.id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`);
            setDetails(request.data);
        }
        getData();
    }, []);

    // get reviews
    useEffect(() => {
        const getData = async () => {
            const request = await axios.get(`/${match.params.type}/${match.params.id}/reviews?api_key=${API_KEY}&language=en-US`);
            setReviews(request.data.results);
        }
        getData();
    }, []);
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    return (
        <div className="details_wrapper" style={{ backgroundColor: '#fff' }}>
            <div className="details_page_backdrop" style={{
                backgroundSize: 'cover',
                backgroundImage: getDetails ? (getDetails.backdrop_path ? `url(https://image.tmdb.org/t/p/original/${getDetails.backdrop_path})` : 'url(/asstes/images/no_image.jpg)') : 'url(/asstes/images/no_image.jpg)',
                backgroundPosition: 'center center'
            }}>
                <Modal
                    basic
                    closeIcon
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    size='small'
                >
                    <Modal.Content>
                        {}
                        <YouTube videoId={youtubeId} opts={opts} onReady={_onReady} />
                        <div className="video_list">
                            <div className="trailer_items">
                                {getDetails && getDetails.videos && getDetails.videos.results.map(video => (
                                    <img 
                                        key={video.id} 
                                        src={`https://img.youtube.com/vi/${video.key}/default.jpg`} 
                                        alt="thumbnail"
                                        onClick={() => setYoutubeId(video.key)}
                                    />
                                ))}
                            </div>
                        </div>
                    </Modal.Content>
                </Modal>
                <div className="details_page_contents">
                    <Container>
                        <Grid>
                            <Grid.Column width={4}>
                                <img className="details__poster" src={getDetails ? imageBaseUrl+getDetails.poster_path : '/assets/images/no_image.jpg'} />
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <h2 className="details__title">
                                    {getDetails ? getDetails.name : 'Unknown'}
                                </h2>
                                <Label basic color="olive">{'TV-MA'}</Label>
                                {getDetails && getDetails.genres.map(genre =>(
                                    <Label key={genre.id} color="olive" tag={true}>
                                        {genre.name}
                                    </Label>
                                ))}
                                <br/>
                                <br/>
                                <Button 
                                    color="olive"
                                    content="Play Trailer"
                                    icon="play"
                                    onClick={() => setOpen(true)}
                                />
                                <Header content="Overview" color="olive" />
                                <Header as="p" color="grey" content={getDetails && getDetails.overview} />
                                <Header content="Creator" color="olive" />
                                {getDetails && getDetails.created_by?.map(creator =>(
                                    <Header key={creator.id} as="a" color="grey">
                                        {creator.name} {' | '}
                                    </Header>
                                ))}
                            </Grid.Column>
                        </Grid>
                    </Container>
                </div>
            </div>
            {getReviews && <Container>
            <br/>
                <Header as="h2" content="Reviews" color="grey" dividing />
                <Feed>
                    {getReviews.map(review => (
                    <Feed.Event key={review.id}>
                        <Feed.Label image='/assets/images/no_image.jpg' />
                        <Feed.Content>
                            <Feed.Summary>
                            <Header color="olive" content={review.author} />
                            </Feed.Summary>
                            <Feed.Extra text>
                            {review.content}
                            </Feed.Extra>
                        </Feed.Content>
                    </Feed.Event>
                    ))}
                </Feed>
                <div style={{ marginTop: 100 }}></div>
            </Container>
            }
        </div>
    );
}

export default Details;

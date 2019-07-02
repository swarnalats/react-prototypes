import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

class MoviesContainer extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            movies:[]
        }
    }
 
componentDidMount()
{
    const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
    axios.get(url).then((resp) => {
        console.log('Resp:', resp);
    
        this.setState({
            movies: resp.data.feed.entry
        });
    });
}   
render()
{
    console.log('The State is:', this.state);  
    const movieList = this.state.movies.map((movieInfo, index) => {
        return <Movies info={movieInfo} key={index}/>;
    });
    return (
        
            <div>
                { movieList }
            </div>
        )
}
}

export default MoviesContainer


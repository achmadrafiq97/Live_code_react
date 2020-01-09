import React from 'react';
import Header from '../component/header';
import ListMoviesCategory from '../component/listMoviesCategory';
import axios from 'axios';

const moviesAPI = "https://api-todofancy.herokuapp.com/api/movies"

class Category extends React.Component {
    state = {
        listMovies:[],
        isLoading:true
    }
    componentDidMount =() =>{
        const self = this
        axios 
        .get(`${moviesAPI}`)
        .then(function(response) {
            self.setState({ listMovies: response.data.articles, isLoading: true});
        })
        .catch(function(error) {
            self.setState({ isLoading: false});
        })
    }
    render() {
        return  (
        <div>
            < Header/>
            < ListMoviesCategory listMovies={this.state.listMovies}/>
        </div> 
        );
    }
}

export default Category;
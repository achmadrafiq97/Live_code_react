import React from 'react';

class ListMoviesCategory extends React.Component {
    render() {
        const {listMovies}= this.props
        return  (
            <div className="margin-body-category">
                {listMovies.map((item, key) => (
                <div className="movies-box">
                    <div>
                        <img className="poster-list-movies" src={item.poster} alt="" />
                    </div>
                </div>
                ))}
            </div>
         );
    }
}

export default ListMoviesCategory;
import React from 'react';

class ListHomeCategory extends React.Component {
    render() {
        return  (
            <div>
                <div className="row margin-list-category poster-category margin-button">
                    <div className="col-md-3">
                        <h4>Romance</h4>
                        <img src={require("../assets-img/romance.jpg")} alt="" />
                        <button type="button" onClick="#">See Movies</button>
                    </div>
                    <div className="col-md-3">
                        <h4>Action</h4>
                        <img src={require("../assets-img/action.jpg")} alt="" />
                        <button type="button" onClick="#">See Movies</button>
                    </div>
                    <div className="col-md-3">
                        <h4>Fiction</h4>
                        <img src={require("../assets-img/fiction.jpg")} alt="" />
                        <button type="button" onClick="#">See Movies</button>
                    </div>
                    <div className="col-md-3">
                        <h4>Comedy</h4>
                        <img src={require("../assets-img/comedy.jpg")} alt="" />
                        <button type="button" onClick="#">See Movies</button>
                    </div>
                </div>
            </div>
         );
    }
}

export default ListHomeCategory;

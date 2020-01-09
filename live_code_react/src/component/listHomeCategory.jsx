import React from 'react';

class ListHomeCategory extends React.Component {
    render() {
        return  (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <h4>Romance</h4>
                    </div>
                    <div className="col-md-3">
                        <h4>Action</h4>
                    </div>
                    <div className="col-md-3">
                        <h4>Fiction</h4>
                    </div>
                    <div className="col-md-3">
                        <h4>Comedy</h4>
                    </div>
                </div>
            </div>
         );
    }
}

export default ListHomeCategory;

import React from 'react';
import Header from '../component/header';
import ListHomeCategory from '../component/listHomeCategory'

class Home extends React.Component {
    render() {
        return  (
        <div>
            < Header />
            < ListHomeCategory />
        </div> );
    }
}

export default Home;
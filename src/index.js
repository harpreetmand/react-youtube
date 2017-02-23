import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyDAomQiSziT9dv91C6fMcx2oUXEfaNPH28";
//create react component. this component should produce html

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}



// take the component generated html and put it on page
ReactDOM.render(<App />, document.querySelector('.container'));
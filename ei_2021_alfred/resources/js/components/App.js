import React from 'react';
import ReactDOM from 'react-dom';
import Router from '../router/index';
import Navbar from './Navbar';

function App() {
    return (
        <div>
            <Navbar/>
            <Router/>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

import React from 'react';
import ReactDOM from 'react-dom';

require('../sass/main.scss');

// import sthg from './sthg.jsx';

document.addEventListener('DOMContentLoaded', function () {

    class App extends React.Component {
        render() {
            return (
                <div>
                    <h1>Hello!</h1>
                </div>
            )
        }
    }

    ReactDOM.render(
        <App/>, document.getElementById('app'));
});
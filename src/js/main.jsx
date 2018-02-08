import React from 'react';
import ReactDOM from 'react-dom';
import {Routing} from './components/routing.jsx';

require('../sass/main.scss');

document.addEventListener('DOMContentLoaded', function () {

    class App extends React.Component {
        render() {
            return (
                <div>
                    <Routing/>
                </div>
            )
        }
    }

    ReactDOM.render(
        <App/>, document.getElementById('app'));
});
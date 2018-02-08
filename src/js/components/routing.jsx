import React from 'react';
import ReactDOM from 'react-dom';
import {Navigation} from './navigation.jsx';
import {LoggedOut} from './loggedOut.jsx';
import {LoggedIn} from './loggedIn.jsx';
import {NotFound} from './notFound.jsx';

import { Router,
    PropsRoute,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

class Routing extends React.Component {

    render() {
        return  (            
            <Router history={hashHistory}>
                <Route path='/' component={Navigation}>
                    <IndexRoute component={LoggedIn} />
                    {/* <IndexRoute component={LoggedOut} /> */}
                    {/* <Route path='/loggedIn' component={LoggedIn} /> */}
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}

export {Routing}
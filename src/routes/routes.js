import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute} from 'react-router'

import Index from '../public/views/index.rayel';
import Body from '../public/views/body.rayel';

export default (
    <Route path='/' component={Index}>
        <IndexRoute name="body" component={Body}/>
    </Route>       
);
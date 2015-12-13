import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext, RoutingContext } from 'react-router';
import routes from '../src/routes/routes';

export default function viewEngine(filePath, options, callback) { // define the template engine

    // const reqUrl = filePath;
    // const requiredComponent = require(filePath);

    // const component = React.createFactory(requiredComponent);
    // const componentInstance = component(options);

    let html = "";

    //html+= ReactDOMServer.renderToString(componentInstance);

    match({ routes, location: '/' }, (error, redirectLocation, renderProps) => {
        if (error) {
            console.log('error');
            //res.status(500).send(error.message)
        } else if (redirectLocation) {
            console.log('redirectLocation');
            //res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            //res.status(200).send(renderToString(<RouterContext {...renderProps} />))
            console.log('test');

            renderProps.createElement = function(Component, routerProps) {
                return React.createElement(Component, Object.assign({}, options, routerProps));
            };

            html = renderToString(<RoutingContext {...renderProps} />);
        } else {
            console.log('404');
            //res.status(404).send('Not found')
        }
    });

    callback(null,html);
}
import webpack from 'webpack';
import webpackConfig from './webpack.config';

export default function dev(app) {

	const compiler = webpack(webpackConfig);

	const webpackMiddleware = require("webpack-dev-middleware");

    app.use(webpackMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    }));

//     // Step 3: Attach the hot middleware to the compiler & the server
//     app.use(webpackHotMiddleware(compiler, {
//         log: console.log,
//         path: '/__webpack_hmr',
//         heartbeat: 10 * 1000
//     }));
// }
}

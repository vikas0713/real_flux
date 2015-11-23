var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var historyApiFallback = require('connect-history-api-fallback');

module.exports = {
    entry: {
        main: [
            './src/app.jsx'
        ]
    },
    output:{
        filename:'./public/js/[name].js'
    },
    module:{
        loaders: [
            {
                test:/\.jsx$/,         // '?' after jsx is for matching both js and jsx
                exclude: /node_modules/,
                loader: 'babel',
                query:
                {
                    presets:['react']
                }
            }
        ]

    },
    plugins: [
        new BrowserSyncPlugin(
        {
        // browse to http://localhost:3000/ during development
        host: 'localhost',
        port: 3000,
        // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:3100/)
        // through BrowserSync
        server : {
          baseDir:'./public',
          middleware: [ historyApiFallback() ]
        }
        },
        // plugin options
        {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        //  reload: false
      }

        )
    ]
};

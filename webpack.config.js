const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
          '@azure': path.resolve(__dirname, 'node_modules/@azure')
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './')
        },
        port: 8080,
        https: true, // Add HTTPS support
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                './index.html'
            ]
        }),
    ]
};
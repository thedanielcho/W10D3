const path = require('path');

module.exports = {
    entry: './frontend/react_minesweeper.jsx',
    output: {
        //path requires absolute path 
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react'] //which presets to run
                    }
                },
            }
        ]
    }
}
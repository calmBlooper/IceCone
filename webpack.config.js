// ... contents of webpack.config.js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 
const path = require('path');
// ... contents of webpack.config.js
module.exports = {
    // ...previous Webpack config...
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
              {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ],
    },
        plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
    ],
     entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'js/main.js',
    },
};


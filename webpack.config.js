const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const output_path = path.resolve(__dirname, "dist");

module.exports = {
    entry: {
        index: "./src/js/index.js"
    },

    output: {
        path: output_path,
        publicPath: "/",
        filename: "js/[name].js"
    },

    mode: 'development',

    devtool: "inline-source-map",

    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|dist|build)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: [/\.scss$/, /\.css$/],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            "includePaths": [
                                require('path').resolve(__dirname, 'node_modules')
                            ]
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ]
};

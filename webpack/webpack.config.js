const path = require('path')

module.exports = {
    mode: 'development',
    // watch: true,
    entry: {
        index: "./src/index.js",
        search: "./src/search.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: "babel-loader"
            },
            {
                test: /.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 30000
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacePlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
}
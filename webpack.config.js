const path = require("path");

module.exports = {
    entry:"./src/app.js",
    output: {
        path:path.join(__dirname,"public"),
        filename:"bundle.js"
    },
    //loader, alters how a file is transformed when loaded
    module: {
        rules:[{
            loader: "babel-loader",
            test: /\.js$/, //ends in .js
            exclude: /node_modules/ //not from node modules
        },{
            test: /\.s?css$/, //ends in .css
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname,"public")
    }
};
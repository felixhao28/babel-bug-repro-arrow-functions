/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const babelLoader = {
    loader: "babel-loader",
    options: {
        presets: ["@babel/typescript", ["@babel/preset-env", {
            targets: {
                chrome: "58",
                ie: "9"
            }
        }]],
        plugins: ["@babel/plugin-transform-arrow-functions", "@babel/plugin-proposal-class-properties", "@babel/plugin-transform-runtime"]
    }
};

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        index: "./src/index.ts",
    },
    target: "web",
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: babelLoader,
            exclude: /node_modules/
        }, {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: babelLoader
        }, {
            test: /\.(ttf|eot|svg|ico|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            use: "asset/inline"
        },
        {
            test: /\.png/,
            type: "asset/resource",
            generator: {
                filename: "images/[hash][ext][query]"
            }
        }, {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "assets"),
        environment: {
            arrowFunction: false,
            bigIntLiteral: false,
            const: false,
            destructuring: false,
            forOf: false,
            module: false,
        },
    }
};

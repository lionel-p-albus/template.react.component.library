const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: '/assets/index.tsx',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/, exclude: /node_modules/, loader: 'babel-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({template: '/assets/index.html'})],
    resolve: {
        alias: {
            // '@services': path.resolve(__dirname, 'src/services/'),
            '@components': path.resolve(__dirname, 'src/components/')
        },
        extensions: ['.ts', '.tsx', '.js', '.d.ts', '.json', '.scss', '.css'],
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 4000,
    },
}

const path = require('path')
const GasPlugin = require('gas-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            }
        ]
    },
    plugins: [
        new GasPlugin()
    ]
}
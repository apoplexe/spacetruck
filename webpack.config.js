module.export = {
    mode: 'development',

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },

    module: {
        rules: [{
            oneOf: [{
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                    options: {},
                }, ],
            }, ]
        }]
    }

}
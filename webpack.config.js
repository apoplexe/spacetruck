const path = require('path');

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
                },
                {
                    test: /\.css$/,
                    include: path.join(__dirname, 'src/components'),
                    use: [
                        'style-loader',
                        {
                            loader: 'typings-for-css-modules-loader',
                            options: {
                                modules: true,
                                namedExport: true
                            }
                        }
                    ]
                }
            ]
        }]
    }
}

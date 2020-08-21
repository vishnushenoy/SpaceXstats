const webpack=require('webpack')

module.exports={
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:'/node_modules/',
                options:{
                    presets:[
                        'react','stage-0',
                        ['env',
                            {
                                targets:{
                                    browsers:['last 2 versions']
                                }
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.(png|jpg)$/i,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            },
            output: {
                comments: false
            }
        })
    ]
}

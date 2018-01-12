var webpack = require("webpack");
const path = require("path");

module.exports = () => {
    return [{
        entry: [        
            "./src/index.tsx"
        ],
        output: {
            path: path.join(__dirname, 'build'),                        
            filename: "bundle.js"        
        },

        resolve: {            
            extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],        
        },        

        module: {
            loaders: [                
                {
                    test: /\.tsx?$/,
                    loaders : ['babel-loader', 'awesome-typescript-loader'],
                    exclude: path.resolve(__dirname, 'node_modules')                
                }            
            ]
        }  
    }];
};

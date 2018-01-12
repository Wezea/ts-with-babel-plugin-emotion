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
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],        
        },        

        module: {
            loaders: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.                
                {
                    test: /\.tsx?$/,
                    loaders : ['babel-loader', 'awesome-typescript-loader'],
                    exclude: path.resolve(__dirname, 'node_modules')                
                }            
            ]
        }  
    }];
};
const path = require('path');

module.exports = {
    entry: './js/init.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        liveReload: false
    }
};
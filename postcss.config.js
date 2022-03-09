const colors = require.resolve('./colors')
delete require.cache[colors];
const vars = require('postcss-simple-vars')

module.exports = {
    plugins: [
        require('postcss-simple-vars')({ variables: require(colors) })
    ]
}
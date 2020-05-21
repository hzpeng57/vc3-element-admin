const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {

    devServer: {
        proxy: {
            '/api/': {
                target: 'https://xxx.com',
                changeOrigin: true,
                pathRewrite: { '^/api': '/api' }
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('components', resolve('./src/components'))
            .set('api', resolve('./src/api'))
    }
}

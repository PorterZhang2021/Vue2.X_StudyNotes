// vue.config.js 常用配置
module.exports = {
    // 基本路径
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    // 用于嵌套生产的静态资产 (js, css, img, fonts) 的目录
    assetsDir: '',
    // 生产环境sourceMap
    productionSourceMap: true,
    // webpack配置
    // configureWebpack: () => {},
    // chainWebpack: () => {},
    // css相关配置
    // css: {
    //     // 启用css modules
    //     modules: false,
    //     // 是否使用css分离插件
    //     extract: true,
    //     // 开启 CSS source maps
    //     sourceMap: false,
    //     // css预设器配置项
    //     loaderOptions: {},
    // },
    // webpack-dev-server 相关配置
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        open: true,
        // proxy: {}, //设置代理
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}
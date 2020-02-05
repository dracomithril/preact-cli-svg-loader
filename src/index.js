const preactCliSvgLoader = (config, helpers) => {
    const urlLoader = helpers.getLoadersByName(config, 'url-loader')
    urlLoader.map(entry => entry.rule.test = /\.(woff2?|ttf|eot|jpe?g|png|gif|mp4|mov|ogg|webm)(\?.*)?$/i)

    const fileLoader = helpers.getLoadersByName(config, 'file-loader')
    fileLoader.map(entry => entry.rule.test = /\.(woff2?|ttf|eot|jpe?g|png|gif|mp4|mov|ogg|webm)(\?.*)?$/i)

    const rawLoader = helpers.getLoadersByName(config, 'raw-loader')
    rawLoader.map(entry => entry.rule.test = /\.(xml|html|txt|md)$/)

    const loader = {
        test: /\.svg$/,
        use: ['preact-svg-loader']
    }

    if(config.module.loaders){
        config.module.loaders.push(loader)
    } else {
        config.module.rules.push(loader)
    }
}

module.exports = preactCliSvgLoader

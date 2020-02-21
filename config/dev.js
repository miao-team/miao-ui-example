module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  mini: {},
  h5: {
    webpack(defaultConfig, webpack) {
      defaultConfig.plugins.push(
        new webpack.ProvidePlugin({
          EModel: "./src/components/Gadus/components/EModald",
        }),
      )
      return defaultConfig
    }
  }
}

export default {
  disableCSSSourceMap: true,
  disableAntdStyle: true,
  library: 'antd-doddle',
  libraryTarget: 'umd',
  extraBabelPlugins: ["transform-decorators-legacy"],
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
        amd: 'react',
    },
    antd: {
      commonjs: 'antd',
      commonjs2: 'antd',
        amd: 'antd',
    },
    moment: {
      commonjs: 'moment',
      commonjs2: 'moment',
        amd: 'moment',
    },
  }
}

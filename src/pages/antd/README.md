## 按需加载

react-app-rewired的默认配置进行自定义
yarn add react-app-rewired customize-cra babel-plugin-import
引入react-app-rewired 并修改package.json里面的启动配置

//根⽬录创建config-overrides.js, 修改默认配置
const { override, fixBabelImports } = require("customize-cra");
  module.exports = override(
  fixBabelImports("import", {//antd按需加载
  libraryName: "antd",
  libraryDirectory: "es",
  style: "css"
 })
);

import { Button } from 'antd'
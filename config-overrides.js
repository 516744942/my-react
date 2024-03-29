const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy } = require("customize-cra");
module.exports = override(
  fixBabelImports("import", {//antd按需加载
    libraryName: "antd",
    libraryDirectory: "es",
    // style: "css"
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "red" }
  }),
  addDecoratorsLegacy()
);
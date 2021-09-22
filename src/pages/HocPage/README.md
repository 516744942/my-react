# HOC 高阶组件

1. 作用 提高组件的复用率,可测试性,保证组件功能的单一性
2. 扩展功能单一的组件

定义:高阶组件 是参数为组件,返回值为新组件的函数



## 链式调用

foo(foo(Child))
不太好用 
1. 装饰器
@foo
@foo
Child
顺序 从下往上
## 配置装饰器 config-overrides 

/* config-overrides.js */
const {  addDecoratorsLegacy } = require('customize-cra')

const config = override(addDecoratorsLegacy())
module.exports = configs

##  注意 
不要在 render中使用HOC
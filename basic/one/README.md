## Virtual DOM (虚拟的DOM）
1. 真实页面中 每次更新页面时,都要手动操作DOM进行更新
2. 性能小号最大的就是DOM操作
3. 把DOM树转换成JavaScript对象树
4. 数据更新之后 两个Virtual做对比部分更新
5. shouldComponentUpdate生命周期
6. 方便和他平台集成(react-native)是基于 Virtual DOM渲染樗原生控件 ,输出的时候根据平台而言
## 函数式编程
1. 增加复用性 减少代码冗余,易于测试
## jsx 语法
1. React 是创建和更新虚拟元素来管理整个 Virtual DOM
2. 虚拟元素的构成和更新都在内存中完成,并不会渲染到DOM中去
3. 虚拟DOM分为两类DOM元素(对应原生DOM)和组件元素(对应自定义元素)
DOM 元素
```
<button class="btn btn-blue">
  <em>confirm</em>
</button>
对应JSON
{
  type:'button',
  props:{
    className:'btn btn-blue',
    children:[{
      type:'em',
      props:{
        children:'Comfirm'
      }
    }]
  }
}
```
组件元素构成 
1. 方法名对应DOM元素类型
2. 参数对应了DOM元素属性
``` 
 const Button =({color,text}) =>{
   return {
     type:button,
     props:[
       className:`btn btn-${color}`,
       children:{
         type:'em',
         props:{
           children:text,
         }
       }
     ]
   }
 }
```
通过babel作为专门的Javascript语法编译工具
React.createElement(
  'div',  // node
  '{color:red}', // attr
  'Cancel'       // children
)
### jsx 基础
1. 定义标签时,只允许被一个标签包裹
2. 标签一定要闭合
### jsx 类型
1. 首字母小写为DOM元素
2. 组件元素对应大写字母
等依赖的组件元素不再出现组件元素,就可以将整个DOM树 构建出来了
组件 命名空间 <MUI.RaisedButton/>

### 元素属性

dom 元素属性都是标准属性
除了(因为他们在java里面是关键词)
1. class属性改为className
2. for属性改为HtmlFor
组件元素 完全是自定义的属性,
也可以理解为实现组件所需要的参数
属性标准小驼峰的写法
#### Boolean属性
可以简写 <Checkbox checked />
#### 展开属性
```
const data = {name:'foo',value:'bar'}
const component = <Component {...data}>
```
#### Javascript表达式  只要用{}

### 组建分类
ui组件和 业务组件
ui组件组成:结构、样式、交互行为
组件封装的思想: 面向对象
1. 基本的封装性: 实例化的方法来制造
2. 简单的生命周期呈现 最明显就是 constructor和destroy
3. 明确的数据流动  指的是调用组件的参数
### React组件

属性(props)、状态(state)、已经生命周期
组件构建的3种方法
1. createClass  就是构建一个组件对象 写成 <Button/>就可以被解析成createElement(Button)
```
const Button = React.createClass({
  getDefaultProps(){
    return{
      color:'blue',
      text:'confirm'
    }
  }
  render(){
    const = {color,text} = this.props
    return(
      
    )
  }
  
})

```
2. ES6 classes
通过 ES6 标准的类语法来构建方法
3. 无状态函数  
1. 只传props和context两个参数
2. 没有state 也没有生命周期
3. propTypes和defaultProps 可以通过静态属性来实现
```
 function Button({color='blue',text='confirm})=>{
  return(
    <button className ={`btn btn-${color}`}>
      <em>{text}</em>
    </button>
  )
}
```
优点: 创建时保持了一个实例,避免了不必要的检查和内存分配 做到了内部优化
### React 数据流
自顶向下单项流动的,即从父组件到子组件

### state
组件内部状态管理
active 内部更新 智能组件
active 外部更新 木偶组件

### props
渲染一个对props加工后的值 最简单的方法就是使用局部变量或者直接在jsx中计算结果
className 根节点
classPrefix 前缀 样式交互分离
#### children




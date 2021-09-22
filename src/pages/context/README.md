## Context API

### React.createContext()

创建⼀个 Context 对象。当 React 渲染⼀个订阅了这个 Context 对象的组件，这个组件会从组件树中离
⾃身最近的那个匹配的 Provider 中读取到当前的 context 值。

### Context.Provider

Provider 接收⼀个 value 属性，传递给消费组件，允许消费组件订阅 context 的变化。
⼀个 Provider可以和多个消费组件有对应关系。
多个 Provider 也可以嵌套使⽤，⾥层的会覆盖外层的数据。

当 Provider 的 value 值发⽣变化时，它内部的所有消费组件都会重新渲染。
Provider 及其内部consumer 组件都不受制于 shouldComponentUpdate 函数，
因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。

### Class.contextType

挂载在 class 上的 contextType 属性会被重赋值为⼀个由 React.createContext() 创建的 Context
对象。这能让你使⽤ this.context 来消费最近 Context 上的那个值。你可以在任何⽣命周期中访问
到它，包括 render 函数中。
只能用单一的

### useContext
context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。
只能⽤在function组件中。

### Consumer
这个函数接收当前的 context 值，返回⼀个 React 节点。
传递给函数的 value 值等同于往上组件树离,这个 context 最近的 Provider 提供的 value 值。
如果没有对应的 Provider， value 参数等同于传递给 createContext() 的 defaultValue 。
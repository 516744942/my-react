##动机
JavaScript 需要管理比任何时候都要多的 state （状态
## 在下⾯的场景中，引⼊ Redux 是⽐较明智的：

1. 你有着相当⼤量的、随时间变化的数据；
2. 你的 state 需要有⼀个单⼀可靠数据来源；
3. 你觉得把所有 state 放在最顶层组件中已经⽆法满⾜需要了。
4. 某个组件的状态需要共享。


## 安装redux

npm install redux --save

## redux上⼿

1. 需要⼀个store来存储数据
2. store⾥的reducer初始化state并定义state修改规则
3. 通过dispatch⼀个action来提交对数据的修改
4. action提交到reducer函数⾥，根据传⼊的action的type，返回新的state

## 检查点

1. createStore 创建store
2. reducer 初始化、修改状态函数
3. getState 获取状态值
4. dispatch 提交更新
5. subscribe 变更订阅
6. combineReducers 变更订阅
## 学习地址
[http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html]


## Action
[https://www.redux.org.cn/docs/basics/Actions.html]
它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。

const ADD_TODO = 'ADD_TODO'

{
  type: TOGGLE_TODO,
  index: 5
}

我们应该尽量减少在 action 中传递的数据
比如上面的例子，传递 index 就比把整个任务对象传过去要好。

{
  type: SET_VISIBILITY_FILTER,
  filter: SHOW_COMPLETED
}

## Reducer
永远不要在 reducer 里做这些操作：

1. 修改传入参数；
2. 执行有副作用的操作，如 API 请求和路由跳转；
3. 调用非纯函数，如 Date.now() 或 Math.random()。

function todoApp(state = initialState, action) {
  // 这里暂不处理任何 action，
  // 仅返回传入的 state。
  return state
}

## Store 

1. 维持应用的 state；
2. 提供 getState() 方法获取 state；
3. 提供 dispatch(action) 方法更新 state；
4. 通过 subscribe(listener) 注册监听器;
5. 通过 subscribe(listener) 返回的函数注销监听器。


再次强调一下 Redux 应用只有一个单一的 store。
当需要拆分数据处理逻辑时，你应该使用 reducer 组合 而不是创建多个 store。

根据已有的 reducer 来创建 store 是非常容易的。在前一个章节中，我们使用 combineReducers() 将多个 reducer 合并成为一个。现在我们将其导入，并传递 createStore()。


## 数据流

### Redux 应用中数据的生命周期遵循下面 4 个步骤：
1.  调用 store.dispatch(action)
你可以在任何地方调用 store.dispatch(action)，包括组件中、XHR 回调中、甚至定时器中。
2.  Redux store 调用传入的 reducer 函数。


3. 根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。
combineReducers()


4. Redux store 保存了根 reducer 返回的完整 state 树。
store.subscribe(listener)
监听器里可以调用 store.getState() 获得当前 state。

## 中间件(Middleware)
1. 原理: 它提供的是位于 action 被发起之后，到达 reducer 之前的扩展点。
2. 作用: 你可以利用 Redux middleware 来进行日志记录、创建崩溃报告、调用异步接口或者路由等等。

import { createStore, combineReducers, applyMiddleware } from 'redux'
let todoApp = combineReducers(reducers)
let store = createStore(
  todoApp,
  // applyMiddleware() 告诉 createStore() 如何处理中间件
  applyMiddleware(logger, crashReporter)
)
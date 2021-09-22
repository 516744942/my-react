## React-router

1. react-router  提供最基本的路由功能
2. react-router-dom 在浏览器中使用
3. react-router-native 在rn中使用


## 我们将用 <Provider /> 包裹 <Router />，以便于路由处理器可以访问 store

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

### (:filter)


<Route path="/(:filter)" component={App} />

## 也许你想将 '#' 从 URL 中移除（例如：http://localhost:3000/#/?_k=4sbb0i）。 你需要从 React Router 导入 browserHistory 来实现：


import { Router, Route, browserHistory } from 'react-router';

<Router history={browserHistory}>
  <Route path="/(:filter)" component={App} />
</Router>

## 精确匹配
exact


## 优先级
children和component互斥
children和render都是function
children>component>render
children 不管location 是否匹配都会被渲染(场景:都需要渲染内容的时候)

##  都不匹配  不写path
<Route component={EmptyPage}></Route> */}

##  唯一匹配  switch
### 独占路由
## 在下⾯的场景中，引⼊ Redux 是⽐较明智的：

### 安装

npm install react-redux --save


### 使⽤react-redux

### react-redux提供了两个api

1. Provider 为后代组件提供store(上下文)
 不用每个每个页面页面引入
2. connect 为组件提供数据和变更⽅法
 获取使用connect


获取使用connect(
  mapStateToProps,  把state映射到props
  mapDispatchToProps 把 dispatch映射到props上面去
  )(component)


	
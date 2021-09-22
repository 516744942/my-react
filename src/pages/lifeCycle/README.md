## 组件生命在周期


16.3之前的 生命周期
    getDeriverStateFromProps
    getSnapshotBeforeUpdate

###  挂载

1. static defaultProps = {}
2. static propTypes = {}
3. constructor(props){
   super(props)
   this.state = {  }
}
4. static getDerivedStateFormProps() 代替了 componentWillMount 和 componentWillReceiveProps
5. render()
   child生命周期 
6. componentDidMount()

### 卸载
componentWillUnmount()

### 更新

1. state 改变
2. getDerivedStateFromProps(props, state) return object
3. 性能优化点 shouldComponentUpdate(nextProps, nextState) return false 结束
4. 前者返回true 继续
5. getSnapshotBeforeUpdate(nextProps, nextState)   代替 componentWillUpdate()
6. render()
   child生命周期
7. componentDidUpdate()

getDerivedStateFromProps  他应该返回一个对象来更新state 如果返回null 则不更新任何内容
不想让他大于5  return  count > 5 ? { count: 0 } : null

getSnapshotBeforeUpdate(prevProps,prevState){
    return { mas: 'getSnapshotBeforeUpdate' } || null
}

componentDidUpdate(prevProps, prevState, snapshot) {
  console.log('componentDidUpdate')
  console.log('snapshot', snapshot)
}


## 老项目更新
如果不想⼿动给将要废弃的⽣命周期添加 UNSAFE_ 前缀，可以⽤下⾯的命令。

npx react-codemod rename-unsafe-lifecycles <path>

## hook
### 概念
hook是一个特殊的函数, 它可以勾入 REact的特性
比如  useState是运行你在React函数组件中添加state的hook
##基本使用
const [count, setCount] = useState(initialState)
return (
  <div>
    {count}
    <button onClick={() => setCount(count + 1)}>add</button>
  </div>
);

## 副作用 
1.  数据的获取
2.  设置订阅
3.  手动更改react组建的中的DOM都属于副作用


第二个参数 条件执行  effect所依赖的数组  数组里面的值改变了 里面才会重新执行
useEffect(() => {
  console.log('effect date')
  // didMount,didUpdate类似 
  const timer = setInterval(() => {
    setDate(new Date())
  }, 1000);
  // 相当于componentWillUnmount 清楚effect
  return () => {
    
    // effect
  };
}, []) // 第二个参数 条件执行

## 自定义 hook
const initialState = new Date()
function UserClock() {
  const [date, setDate] = useState(initialState)
  useEffect(() => {
    let timer = setInterval(() => {
      setDate(new Date())
    }, 1000);
    return () => {
      clearInterval(timer)
    };
  }, [])
  return date
}
## hook规则 
1. 不能在循环,条件判断和子函数中调用(只能在函数的最外层使用)
错误举例 
if(count){ const [date, setDate] = useState(initialState)}
2. 只能在函数组件和自定义的hook中使用
错误举例
function getNum(){
  const [date, setDate] = useState(initialState)
  return  date
}

## useMemo  and  useCallback


UseMemo('创建函数',依赖项数组)
它仅会在某个依赖项改变时才重新计算memoized(记忆化的)值
有助于避免高开销的计算


UseCallbackPage('内联函数'依赖数组作为参数传入,)
它将返回该函数的memoized本部,该回调函数金子啊某个依赖改变时才更新
当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染(shouldComponentUpdate)的子组件时,他将非常有用
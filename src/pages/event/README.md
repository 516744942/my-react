## 事件
stopPropagation()和preventDefault()

### 事件命名 小驼峰
<button onClick="handleClick()" >Text</button>

### 合成事件和事件机制(事件委派和自动绑定)
1. 事件委托
所有事件绑定到结构的最外层,使用一个统一的事件监听器，
简化了事件处理和回收机制，效率也有很大的提升
2. 自动绑定
自动绑定的this 为当前组件实例
react 还会对这种引用进行缓存,达到了CPU和内存的最优化
手动绑定this的绑定

#### 绑定 this
1. 构造器内部申明 this.handleClick = this.handleClick.bind(this)
2. 箭头函数  const handleClick = e =>{
  console.log(e)
}
3 原声事件
ref={ref => this.Com = ref}
this.Com.addEventListener('click',this.handleClick);
this.Com.removeEventListener('click',this.handleClick);
不移除会内存溢出的问题
## 合成事件和原生事件混用



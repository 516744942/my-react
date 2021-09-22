##   PureComponent

知识要点  
1. 实现性能优化
2. 浅比较
3. 与Component

课堂目标

PureComponent 比 Component 在于 实现了 shouldComponentUpdate中 prop 和state的浅比较
从而阻止render的渲染提高  从而提升效率
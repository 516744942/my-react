## 在下⾯的场景中，引⼊ Redux 是⽐较明智的：

1 你有着相当⼤量的、随时间变化的数据；
2 你的 state 需要有⼀个单⼀可靠数据来源；
3 你觉得把所有 state 放在最顶层组件中已经⽆法满⾜需要了。
4 某个组件的状态需要共享。


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
import { createStore } from 'redux'
import todoApp from './reducers'

const store = createStore(todoApp)

export default store


/**
 * createStore() 的第二个参数是可选的,  let store = createStore(todoApp, window.STATE_FROM_SERVER)
 *  用于设置 state 初始状态。
 *  这对开发同构应用时非常有用，
 *  服务器端 redux 应用的 state 结构可以与客户端保持一致,
 *  那么客户端可以将从网络接收到的服务端 state 直接用于本地数据初始化
 */

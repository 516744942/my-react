import { call, put, takeEvery } from 'redux-sage'
import { UserService } from '../service/login'

function* loginHandle(props) {
  const res = yield call(UserService.login, { name: "小明" })
  console.log('res', res)
}

//  watcher saga
function* mySaga(props) {
  yield takeEvery('login', loginHandle)
}

export default mySaga
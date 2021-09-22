import {all} from "redux-saga/effects";
import loginSaga from "./loginSaga";
//  多个 用 all方法 参数是一个数组 然后执行
export default function* rootSaga() {
  yield all([loginSaga()]);
}

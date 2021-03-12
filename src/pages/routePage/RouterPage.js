import React, { Component, PureComponent } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import lifeCycle from "../lifeCycle/lifeCycle";
import JsxComponents from "../jsx/jsx";
import MyComponent from "../components/index";
import MySetState from "../SetState/index";
import complexComponent from "../complexComponent/index";
import MyReduce from "../redux/index";
import ReactReduxPage from "../ReactRedux/basic/index";
import MyPureComponent from "../PureComponent";
import HookComponent from "../hook";
import HocPage from "../HocPage";
import HocForm from "../HocForm";
import DialogPage from "../DialogPage";

class RouterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <div>
        {/* <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider> */}

        <h3>RouterPage</h3>
        <Router>
          <ul>
            <li>
              <Link to="/" >首页</Link>
            </li>
            <li>
              <Link to="/user"  >用户中心</Link>
            </li>
            <li>
              <Link to="/jsx"  >jsx内容</Link>
            </li>
            <li>
              <Link to="/com"  >com</Link>
            </li>
            <li>
              <Link to="/setState"  >MySetState</Link>
            </li>
            <li>
              <Link to="/complex"  >complex</Link>
            </li>
            <li>
              <Link to="/reduce"  >reduce</Link>
            </li>
            <li>
              <Link to="/reactReduce">reactReduce</Link>
            </li>
            <li>
              <Link to="/lifeCycle">lifeCycle</Link>
            </li>
            <li>
              <Link to="/PureComponent"  >PureComponent</Link>
            </li>
            <li>
              <Link to="/DialogPage"  >DialogPage</Link>
            </li>
            <li>
              <Link to="/HookComponent"  >HookComponent</Link>
            </li>
            <li>
              <Link to="/HocPage"  >HocPage</Link>
            </li>
            <li>
              <Link to="/HocForm"  >HocForm</Link>
            </li>
            <li>
              <Link to="/404"  >404</Link>
            </li>


          </ul>
          {/* children>component>render 不管location是什么 children都会被渲染 */}
          <Switch>
            <Route path="/" exact
              // component={HomePage}
              // children={() =>
              //   <div>
              //     children
              // </div>
              // }
              render={() => <div>
                render
            </div>} ></Route>
            <Route path="/user" component={UserPage}></Route>
            <Route path="/jsx" component={JsxComponents}></Route>
            <Route path="/com" component={MyComponent}></Route>
            <Route path="/setState" component={MySetState} ></Route>
            <Route path="/complex" component={complexComponent} ></Route>
            <Route path="/reduce" component={MyReduce} ></Route>
            <Route path="/reactReduce" component={ReactReduxPage} ></Route>
            <Route path="/lifeCycle" component={lifeCycle}></Route>
            <Route path="/HookComponent" component={HookComponent}></Route>
            <Route path="/PureComponent" component={MyPureComponent} ></Route>
            <Route path="/DialogPage" component={DialogPage} ></Route>
            <Route path="/HocForm" component={HocForm} ></Route>
            <Route path="/HocPage" component={HocPage} ></Route>
          </Switch>

        </Router>
      </div >
    );
  }
}

RouterPage.propTypes = {

};

export default RouterPage;



// class HomePage extends Component {
//   render() {
//     return (
//       <div>
//         homePage
//       </div>
//     );
//   }
// }



class UserPage extends Component {


  render() {
    return (
      <div>
        userPage
      </div>
    )
  }
}

class EmptyPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      obj: {
        num: 0,
      }
    };
  }
  setCount = () => {
    this.setState({
      count: 100,
      obj: {
        num: 1000,
      }
    })
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.count !== this.state.count
  // }
  render() {
    const { count } = this.state
    console.log('render')
    return (
      <div onClick={this.setCount}>
        {count}
      </div >
    );
  }
}

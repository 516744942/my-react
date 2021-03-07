import React, { Component, PureComponent } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import lifeCycle from "../lifeCycle/lifeCycle";
import JsxComponents from "../jsx/jsx";
import MyComponent from "../components/index";
import MySetState from "../SetState/index";
import complexComponent from "../complexComponent/index";
import MyReduce from "../redux/index";

class RouterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to="/" >首页</Link>
          <Link to="/user"  >用户中心</Link>
          <Link to="/jsx"  >jsx内容</Link>
          <Link to="/com"  >com</Link>
          <Link to="/setState"  >MySetState</Link>
          <Link to="/complex"  >complex</Link>
          <Link to="/reduce"  >reduce</Link>
          <Link to="/404"  >404</Link>
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
            {/* <Route component={lifeCycle}></Route> */}
          </Switch>

        </Router>
      </div>
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

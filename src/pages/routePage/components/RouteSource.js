import HomePage from "./HomePage";
import UserPage from "./UserPage";
import LoginPage from "./LoginPage";
import _404Page from "./_404Page";
import RouteComponentPage from "./RouteComponentPage";
import WelcomePage from "./WelcomePage";
import React from "react";
import { Button } from 'antd'
import {
  // BrowserRouter as Router,
  // Route,
  // Link,
  // Switch,
  // useRouteMatch,
  // useHistory,
  // useLocation,
  // useParams,
  // withRouter,
  // Prompt
} from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useRouteMatch,
  useHistory,
  useLocation,
  useParams,
  withRouter,
  Prompt
} from "../source";

export default function App(props) {
  return (
    <div className="app">
      <Router>
        <Link to={`${props.match.url}`}>首页</Link>
        <Link to={`${props.match.url}/user`}>用户中心</Link>
        <Link to={`${props.match.url}/login`}>登录</Link>
        <Link to={`${props.match.url}/product/123`}>商品</Link>

        <Switch>
          <Route
            exact
            path={`${props.match.url}`}
            // children={children}
            component={HomePage}
          // render={render}
          >
            {/* children 0000 */}
          </Route>
          <Route path={`${props.match.url}/user`} component={UserPage} />
          <Route path={`${props.match.url}/login`} component={LoginPage} />
          <Route path={`${props.match.url}/product/:id`} component={Product} />
          {/* <Route path="/product/:id" render={() => <Product />} /> */}

          <Route path={`${props.match.url}`} component={_404Page} />
        </Switch>
      </Router>
    </div>
  );
}
function children(props) {
  console.log(123)
  return <div>children</div>;
}

function render(props) {
  console.log("render props", props); //sy-log
  return <div>render</div>;
}

//  函数组件
// function Product() {
//   const match = useRouteMatch();
//   const history = useHistory();
//   const location = useLocation();
//   const _params = useParams();
//   console.log("hhhhhh", history, location, match, _params); //sy-log
//   console.log("match", match); //sy-log
//   const { params, url } = match;
//   const { id } = params;
//   return (
//     <div>
//       <h1>Search-{id}</h1>
//       <Link to={url + "/detail"}>详情</Link>
//       <Route path={url + "/detail"} component={Detail} />
//     </div>
//   );
// }
//
@withRouter
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { confirm: true };
  }
  change = () => {
    this.setState((state) => {
      return {
        confirm: !state.confirm
      }
    },()=>{
      console.log(this.state.confirm)
    })
  }
  render() {
    const { params, url } = this.props.match;
    const { id } = params;
    console.log("props", this.props); //sy-log
    return (
      <div>
        <Button onClick={() => this.change()} >change</Button>
        Product:{id}
        <Prompt
          when={this.state.confirm}
          message="Are you sure you want to leave?"
          message={location => {
            return "Are you sure you want to leave-fun";
          }}
        />
      </div>
    );
  }
}

function Detail({ match }) {
  return (
    <div>
      <h1>detail</h1>
    </div>
  );
}
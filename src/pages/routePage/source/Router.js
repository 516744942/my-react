import React, { Component } from 'react'
import { RouterProvider } from './Context'
export default class Router extends Component {
  static computeRootMatch(pathname) {
    return {path: "/", url: "/", params: {}, isExact: pathname === "/"};
  }
  constructor(props) {
    super(props)
    this.state = {
      location: props.history.location
    }
    //  location 发生变化执行这里的回调
    this.uniListen = props.history.listen(location => {
      this.setState({ location },);
    });
  }
  componentWillUnmount() {
    if (this.uniListen) {
      this.uniListen()
    }
  }
  render() {
    // const { location } = this.state
    console.log(this.props.history)
    console.log('location', this.state.location)
    return (
      <RouterProvider value={{
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname)

      }}>
        {this.props.children}
      </RouterProvider>
    )
  }
}

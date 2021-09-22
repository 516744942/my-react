import React, { Component } from 'react';
import { RouterConsumer, RouterProvider } from './Context'
import matchPath from './matchPath';

class Route extends Component {
  render() {
    return (
      <RouterConsumer>
        {context => {
          const location = context.location;
          const { children, component, render, path, computedMatch } = this.props
          const match = computedMatch ? computedMatch : path ?
            matchPath(location.pathname, this.props)
            : context.match
          // 是一个object 
          const props = {
            ...context,
            match
          }
          {/*  children>component>render*/ }
          {/* return math ? React.createElement(component, props) : null; */ }
          console.log('match', match)
          console.log('props', props)
          return (
            <RouterProvider value={props}>
              {match ?
                children ?
                  typeof children === 'function' ?
                    children(props) :
                    children
                  : component ? React.createElement(component, props)
                    : render ? render(props) : null
                : (typeof children === 'function' ? children(props) : null)
              }
            </RouterProvider>

          )
        }}
      </RouterConsumer>
    );

  }
}

export default Route;
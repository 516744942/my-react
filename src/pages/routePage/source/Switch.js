import React from 'react';
import PropTypes from 'prop-types';
import { RouterConsumer } from './Context';
import matchPath from './matchPath';

const propTypes = {};

const defaultProps = {};

export default class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <RouterConsumer>
        {
          context => {
            // match 是否匹配
            // element 记录匹配的元素 
            let match,
              element
            React.Children.forEach(this.props.children, child => {
              // 有效的元素 
              if (match == null && React.isValidElement(child)) {
                element = child
                const { path } = child.props
                match = path ? matchPath(context.location.pathname,child.props) : context.match
              }
            })
            return match ? React.cloneElement(element, {
              computedMatch: match   // 
            }) : null;
          }
        }
      </RouterConsumer>
    );
  }
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;
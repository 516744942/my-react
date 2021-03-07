import React from 'react';
import PropTypes from 'prop-types';
import Layout from "./Layout";



const propTypes = {};

const defaultProps = {};



export default class complexComponent extends React.Component {
  static propTypes: {};
  static defaultProps: {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  showObj = {
    showTop: true,
    showPage: true,
    showBottom: false,
  }
  buttonClick = () => {
    console.log(this, '好的好的 ')
  }

  render() {
    let { showObj } = this
    return (
      <div>
        <Layout {...showObj} >
          {/* 
            多插槽内容
          */}
          {{
            content: (
              <div>content对象</div>
            ),
            text: (
              <div>文本</div>
            ),
            buttonClick: this.buttonClick
          }}

        </Layout>
      </div>
    );
  }
}

complexComponent.propTypes = propTypes;
complexComponent.defaultProps = defaultProps;
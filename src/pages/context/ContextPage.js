import React, { Component } from 'react';
import ThemeComponent from './component/index'
import FunCom from './component/FunCom'
import ConsumerPage from './component/Consumer'
import { ThemeProvider, UserProvider } from './Context';



class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: "red"
      },
      user: { name: 'xian ming' }
    }
  }
  render() {
    const { theme, user } = this.state

    return (
      <div>
        ContextPage
        <ThemeProvider value={theme}>
          <UserProvider value={user}>
            <ThemeComponent />
            <FunCom />
            <ConsumerPage />
          </UserProvider>
        </ThemeProvider>
      </div>
    );
  }
}

export default ContextPage;
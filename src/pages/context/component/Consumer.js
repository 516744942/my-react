import React, { Component } from 'react';
import { ThemeConsumer, UserConsumer } from '../Context'
class ConsumerPage extends Component {
  render() {
    return (
      <div>
        ConsumerPage
        <ThemeConsumer>
          {
            ThemeContext => <div >
              {ThemeContext.themeColor}
              <div>
                <UserConsumer>
                  {
                    UserContext => <div>{UserContext.name}</div>
                  }
                </UserConsumer>
              </div>
            </div>
          }
        </ThemeConsumer>
      </div>
    );
  }
}

export default ConsumerPage;
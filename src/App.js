import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Layout from './components/layout';
// import ReduxPage from './pages/ReduxPage';
import RouterPage from './pages/routePage/RouterPage';
let btnClick = (e, value) => {
  console.log(e)
  console.log(111)
  console.log(value)
}
function App() {

  return (
    <div>
      <RouterPage></RouterPage>
      {/* <ReduxPage></ReduxPage>
      <Layout showTopBar={false} showBottomBar={true} title="商城⾸⻚">
        {{
          content: (
            <div> <h3>HomePage</h3>
            </div>
          ),
          txt: "这是个⽂本",
          btnClick: btnClick
        }}
      </Layout>
      <img src={logo} alt="" srcset="" /> */}
    </div>

  );
}

export default App;

import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import FitBuilder from './containers/FitBuilder/FitBuilder';



class App extends Component {
  render() {
    return (
      <div >
        <Layout>
        <FitBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;

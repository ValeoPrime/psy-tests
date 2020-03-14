import React from 'react';
import Layout from './hoc/Layout/Layout'
import MainQuiz from './containers/MainQuiz'

import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <MainQuiz />
        
      </Layout>
    </div>
  );
}

export default App;

import React from 'react';
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom'
import MainQuiz from './containers/MainQuiz'
import GuestScreen from './components/UI/GuestScreen/GuestScreen'


import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          
          <Route path= "/auth" render= {()=> 
            <div style={{textAlign: 'center'}}>
              <h1>Аутентификация</h1>
            </div>
          }/>
          <Route path= "/create-quize" render= {()=> 
            <div style={{textAlign: 'center'}}>
              <h1>Создать опрос</h1>
            </div>
          }/>
          <Route path= "/quiz/:id"  component={MainQuiz}/>
          <Route path= "/" component={GuestScreen}/>

        </Switch>
      </Layout>
    </div>
  );
}

export default App;

import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import MainQuiz from './containers/MainQuiz'
import GuestScreen from './components/UI/GuestScreen/GuestScreen'
import Auth from './containers/Auth/Auth'
import QuizCreator from './containers/QuizeCreator/QuizCreator'
import './App.css';
import { connect } from 'react-redux';
import Logout from './components/Logout/Logout';
import { autoLogin } from './store/actions/authActions'

class App extends Component {
  
  componentDidMount() {
    this.props.autoLogin()
  }
  
  render(){
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz/:id" component={MainQuiz} />
        <Route path="/" exact component={GuestScreen} />
        <Redirect to={'/'} />
      </Switch>
    )
  
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/create-quize" component={QuizCreator} />
          <Route path="/quiz/:id" component={MainQuiz} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={GuestScreen} />
          <Redirect to={'/'} />
        </Switch>
      )
    }
    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
  
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));



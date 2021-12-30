import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages';
import bmiPage from './pages/bmi';
import devsPage from './pages/devs';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signin" component={SigninPage} exact />
      <Route path="/signup" component={SignupPage} exact />
      <Route path="/bmiCalculator" component={bmiPage} exact />
      <Route path="/devs" component={devsPage} exact />
    </Switch>
  );
}

export default App;

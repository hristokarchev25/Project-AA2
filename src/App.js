import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './pages';
import aboutPage from './pages/about';
import bmiPage from './pages/bmi';
import contactUsPage from './pages/contactUs';
import devsPage from './pages/devs';
import Shop from './pages/shop';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import workoutsPage from './pages/workouts';
import proteinDetailsPage from './pages/proteinDetailsPage';

import { auth } from './utils/firebase';


function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signin" component={SigninPage} exact />
      <Route path="/signup" component={SignupPage} exact />
      <Route path="/bmiCalculator" component={bmiPage} exact />
      <Route path="/devs" component={devsPage} exact />
      <Route path="/workouts" component={workoutsPage} exact />
      <Route path="/shop" component={Shop} exact />
      <Route path="/shop/details/proteins/:proteinId" component={proteinDetailsPage} exact />
      <Route path="/contactUs" component={contactUsPage} exact />
      <Route path="/about" component={aboutPage} exact />
      <Route path="/logout" render={props => {
        auth.signOut();
        return <Redirect to="/" />
      }} />
    </Switch>
  );
}

export default App;

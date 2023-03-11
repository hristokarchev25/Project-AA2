import { Route, Switch, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import matsDetailsPage from './pages/matsDetailsPage';
import gymDetailsPage from './pages/gymDetailsPage';
import LoadingPage from './pages/loadingPage';

import { auth } from './utils/firebase';


function App() {

  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 2500);
  }, []);


  return (

    <>
      {Loading === true ? (
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path="/bmiCalculator" component={bmiPage} exact />
          <Route path="/devs" component={devsPage} exact />
          <Route path="/workouts" component={workoutsPage} exact />
          <Route path="/shop" component={Shop} exact />
          <Route path="/shop/details/proteins/:proteinId" component={proteinDetailsPage} exact />
          <Route path="/shop/details/mats/:matId" component={matsDetailsPage} exact />
          <Route path="/shop/details/gym/:gymId" component={gymDetailsPage} exact />
          <Route path="/contactUs" component={contactUsPage} exact />
          <Route path="/about" component={aboutPage} exact />
          <Route path="/logout" render={props => {
            auth.signOut();
            return <Redirect to="/" />
          }} />
        </Switch>
      ) : (<LoadingPage />)}
    </>

  );
}

export default App;

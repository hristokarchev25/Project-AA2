import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signin" component={SigninPage} exact />
    </Switch>
  );
}

export default App;

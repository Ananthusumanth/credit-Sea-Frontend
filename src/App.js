import {Switch, Route} from 'react-router-dom';
import UserDashboardLoan from './components/UserDashboardLoan';
import UserDashboardApplicationForm from './components/UserDashboardApplicationForm';
import AdminDashboard from './components/AdminDashboard';
import VerifiedDashboard from './components/VerifiedDashboard';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={UserDashboardLoan} />
      <Route exact path='/App-Form' component={UserDashboardApplicationForm} />
      <Route exact path="/Verified" component={VerifiedDashboard} />
      <Route exact path='/Admin' component={AdminDashboard} />
    </Switch>
  );
}

export default App;

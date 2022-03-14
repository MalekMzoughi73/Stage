
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp'
import RezetPassword1 from './components/RezetPassword1'
import RezetPassword2 from './components/RezetPassword2'
import ActivePage from './components/ActivePage'
import Profile from './components/Profile'
import UserPage from './components/UserPage';
import AdminPage from './Admin/AdminPage';
import ProjectManagerPage from './components/ProjectManagerPage';
import CreateUser from './Admin/PageUser/CreateUser';
import ListUsers from './Admin/PageUser/ListUsers';
import Searchuser from './Admin/PageUser/Searchuser';
import UpdateUser from './Admin/PageUser/UpdateUser';
import ViewUser from './Admin/PageUser/ViewUser';
function App() {
  return (
    <>
      
        
          <Router>

            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path='/home' exact={true} component={Home} />
              <Route path="/signin" component={Login}></Route>
              <Route path='/signup' exact={true} component={SignUp}/>
              <Route path ="/rezetPasswordSendEamil" exact={true} component = {RezetPassword1}></Route>
              <Route path ="/rezetPasswordSendCode" exact={true} component = {RezetPassword2}></Route>
              <Route path ="/active" exact={true} component = {ActivePage}></Route>
              <Route path='/profile' exact={true} component={Profile}/>
              <Route path='/user' exact={true} component={UserPage}/>
              <Route path='/admin' exact={true} component={AdminPage}/>
              <Route path='/pm' exact={true} component={ProjectManagerPage}/>
              <Route path='/ListUsers' exact={true} component={ListUsers}/>
              <Route path='/createUser/:id' exact={true} component={CreateUser}/>
              <Route path='/createUser/:id' exact={true} component={UpdateUser}/>
              <Route path ="/viewUser/:id" component = {ViewUser}></Route>
              <Route path ="/search/:cin" component = {Searchuser}></Route>
            </Switch>

          </Router>
        



    </>
  );
}

export default App;

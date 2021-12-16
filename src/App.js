import './App.css';
import Home from './componets/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Order from './componets/Order/Order';
import Login from './componets/Login/Login/Login';
import Register from './componets/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './componets/Login/PrivateRoute/PrivateRoute';
import OurService from './componets/OurServices/OurService';
import UserOrders from './componets/UserOrders/UserOrders';
import Dashbord from './componets/Dashbord/Dashbord';
import About from './componets/About/About';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div >
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/ourservices">
              <OurService></OurService>
            </Route>
            <PrivateRoute path="/userorders">
              <UserOrders></UserOrders>
            </PrivateRoute>
            <PrivateRoute path="/order/:productID">
              <Order></Order>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/dashbord">
              <Dashbord></Dashbord>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>

          </Switch>

        </Router>

      </AuthProvider>

    </div>
  );
}

export default App;

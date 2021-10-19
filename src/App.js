// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Service from './Pages/Service/Service';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Authenticate/Login/Login';
import Register from './Pages/Authenticate/Register/Register';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Pages/Authenticate/PrivateRoute/PrivateRoute';
import Shop from './Pages/Shop/Shop';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/service/:id'>
              <Service></Service>
            </PrivateRoute>
            <PrivateRoute exact path='/shop'>
              <Shop></Shop>
            </PrivateRoute>
            <Route exact path='/about'>
              <About></About>
            </Route>
            <Route exact path='/contact'>
              <Contact></Contact>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

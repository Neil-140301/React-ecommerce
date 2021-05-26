import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/React-ecommerce/login" component={LoginForm} />
      <ProtectedRoute exact path="/React-ecommerce" component={Home} />
      <ProtectedRoute
        exact
        path="/React-ecommerce/products"
        component={Products}
      />
      <ProtectedRoute exact path="/React-ecommerce/cart" component={Cart} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App

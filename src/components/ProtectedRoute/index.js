import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/React-ecommerce/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute

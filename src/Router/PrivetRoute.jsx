import { Navigate } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import PropTypes from 'prop-types';
import Loader from '../Components/Loader';
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  

  if (loading) return <Loader/>
  if (user) return children
  return <Navigate to='/login' />
}
// propTypes
PrivateRoute.propTypes = {
    children: PropTypes.node
}


export default PrivateRoute
import Loader from "../components/Shared/Loader";
import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";



// eslint-disable-next-line react/prop-types
const GuideRoute = ({children}) => {
    const [role, isLoading] = useRole()

  if (isLoading) return <Loader />
  if (role === 'guide') return children
  return <Navigate to='/dashboard' />
};

export default GuideRoute;
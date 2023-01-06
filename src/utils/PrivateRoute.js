import { Navigate } from "react-router";
import { useCustomContext } from "./CustomContext";

const PrivateRoute = ({children}) => {
    const { loginState, loginDispatch } = useCustomContext();
    return loginState.login ? children : <Navigate to={'/login'}  />;
}


export default PrivateRoute;
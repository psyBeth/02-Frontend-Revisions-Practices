import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const PrivateRouter = () => {
    //TODO: make it read from global state
    const { user } = useContext(LoginContext)
    return user.email && user.password ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;

import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import LoginProvider from "../context/LoginProvider";

const PrivateRouter = () => {
    //TODO: make it read from global state
    const { user } = useContext(LoginProvider)
    return user.email && user.password ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;

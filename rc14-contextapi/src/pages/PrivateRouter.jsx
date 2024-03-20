// import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
// import LoginProvider from "../context/LoginProvider";
import { useLoginContext } from "../context/LoginProvider";

const PrivateRouter = () => {
    // : make it read from global state
    const { user } = useLoginContext()
    return user.email && user.password ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;

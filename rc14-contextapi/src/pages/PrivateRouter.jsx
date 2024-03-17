import { Outlet, Navigate } from "react-router-dom";

const PrivateRouter = () => {
    //TODO: make it read from global state
    const user = true;
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;

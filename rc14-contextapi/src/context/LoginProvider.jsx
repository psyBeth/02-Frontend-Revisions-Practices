import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

//? 1 - create a context that will keep the login info
export const LoginContext = createContext()


//? 2- Wrapping it up here
const LoginProvider = ({ children }) => {
    const [ user, setUser ] = useState({ email: "", password: "" });

    const values = {
      user, 
      setUser,
    };

  return (
    <div>
        <LoginContext.Provider value={ values }>
            {children}
        </LoginContext.Provider>
    </div>
  )
};

//? Custom hook for consuming
export const useLoginContext = () => {
  return useContext(LoginContext)
};


export default LoginProvider

/* <Provider>   //! App is the child of the provider (props.children)
  <App/>
</Provider> */

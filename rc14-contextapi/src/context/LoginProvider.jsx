import { createContext } from "react";
import { useState } from "react";

//? 1 - create a context that will keep the login info
export const LoginContext = createContext()


//? 2- Wrapping it up here
const LoginProvider = ({ children }) => {
    const [user, setUser] = useState({ email: "", password: "" });

  return (
    <div>
        <LoginContext.Provider value={{ user, setUser }}>
            {children}
        </LoginContext.Provider>
    </div>
  )
}

export default LoginProvider

/* <Provider>   //! App is the child of the provider (props.children)
  <App/>
</Provider> */

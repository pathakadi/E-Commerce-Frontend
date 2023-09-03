import { createContext } from "react";

export const Context = createContext();

const AppContext = ({ children}) => {
    return(
        // The Provider is responsible for creating and managing the context, which holds the data to be shared between components.
        <Context.Provider>  
            {children}
        </Context.Provider>
    )
};

export default AppContext;
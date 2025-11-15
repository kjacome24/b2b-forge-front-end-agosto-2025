import {createContext} from 'react'

const AppContext = createContext(
    {
        message: "",
        setMessage: () => {}
    }
)

export default AppContext;

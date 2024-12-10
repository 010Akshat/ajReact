import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}

/* Now  , this is production grade appproach. Previously we have used two files for same work but 
that was easier to understand , here we compacted the whole work in single file.
Also
export default function useTheme(){
    return useContext(ThemeContext)
}
will let use ThemeContext Directly , without importing UseContext and ThemeContext both in a file.
*/

import React from 'react'

// const initTheme = { themeColor: 'pink' }

// export const ThemeContext = React.createContext(initTheme)
export const ThemeContext = React.createContext()
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;



export const UserContext = React.createContext()
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
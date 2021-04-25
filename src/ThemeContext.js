import React from 'react'

export const ThemeContext = React.createContext();

export function ThemeProvider({children}){
  const [theme, setTheme] = React.useState('dark')

  function handleToggleTheme(){
    setTheme(prevState => (
      prevState === 'dark' 
      ? 'light'
      : 'dark'
    ))
  }
  
  return(
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme:handleToggleTheme  
      }}
      >
      {children}
    </ThemeContext.Provider>
  )
}

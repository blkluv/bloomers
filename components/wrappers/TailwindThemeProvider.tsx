'use client'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { DEFAULT_THEME } from '../../utils/config'

interface ContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const ThemeContext = createContext<ContextType>({
  theme: 'light',
  toggleTheme: () => {}
})
// import MUITheme from './MUITheme'
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(DEFAULT_THEME)

  const toggleTheme = () => {
    if (theme === 'light') {
      document.body.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
      window.localStorage.setItem('data-theme', 'dark')
      setTheme('dark')
    } else {
      document.body.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
      window.localStorage.setItem('data-theme', 'light')
      setTheme('light')
    }
  }

  useEffect(() => {
    const theme = window.localStorage.getItem('data-theme')
    if (theme) {
      document.body.classList.add(theme)
      document.documentElement.setAttribute('data-theme', theme)
      // @ts-ignore
      setTheme(theme)
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : DEFAULT_THEME
      document.body.classList.add(systemTheme)
      document.documentElement.setAttribute('data-theme', systemTheme)
      window.localStorage.setItem('data-theme', systemTheme)
      setTheme(systemTheme)
    }
  }, [])

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name=theme-color]')
    if (metaThemeColor) {
      // @ts-ignore
      metaThemeColor.setAttribute(
        'content',
        theme === 'dark' ? '#1e1e1e' : '#ffffff'
      )
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider

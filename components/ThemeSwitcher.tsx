import React,{useState, useEffect} from 'react'

import {useTheme} from 'next-themes'
import {
    MenuIcon,
    XIcon,
    SunIcon,
    MoonIcon,
  } from "@heroicons/react/solid";


const ThemeSwitcher: React.FC = () => {

  const {systemTheme, theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

    const renderThemeChanger = () => {
      if(!mounted) return null
      const currentTheme = theme === 'system' ? systemTheme  : theme;

      if (currentTheme === 'dark') {
        return <SunIcon className='h-7 w-7' role="button" onClick={()=> setTheme('light')} />
      }else {
        return <MoonIcon className='h-7 w-7' role='button'  onClick={()=> setTheme('dark')} />
      }
    }


    return (
        <>
              {renderThemeChanger()}
        </>
       
    )
}


export default ThemeSwitcher
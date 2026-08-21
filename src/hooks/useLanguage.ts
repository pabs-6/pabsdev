import { useEffect, useState } from 'react'

export type Language = 'es' | 'en'

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'es'
    return (window.localStorage.getItem('language') as Language | null) ?? 'es'
  })

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'))
  }

  return { language, toggleLanguage }
}

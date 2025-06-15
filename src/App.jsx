import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { DefaultLayout } from '@/components/layouts'
import { ReactBasicPage } from '@/components/pages'
import { ThemeProvider } from '@/components/providers'
import { THEME_STORAGE_KEY } from '@/constants/theme'
import './App.css'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey={THEME_STORAGE_KEY}>
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<ReactBasicPage />} />
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

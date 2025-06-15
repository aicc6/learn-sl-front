import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { DefaultLayout } from '@/components/layouts'
import { ReactBasicPage, TodosPage } from '@/components/pages'
import { GlobalStateProvider, ThemeProvider } from '@/components/providers'
import { THEME_STORAGE_KEY } from '@/constants/theme'
import { store } from '@/store'
import './App.css'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey={THEME_STORAGE_KEY}>
      <GlobalStateProvider store={store}>
        <BrowserRouter>
          <DefaultLayout>
            <Routes>
              <Route path="/" element={<ReactBasicPage />} />
              <Route path="/todos" element={<TodosPage />} />
            </Routes>
          </DefaultLayout>
        </BrowserRouter>
      </GlobalStateProvider>
    </ThemeProvider>
  )
}

export default App

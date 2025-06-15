import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { DefaultLayout } from '@/components/layouts'
import { ReactBasicPage } from '@/components/pages'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<ReactBasicPage />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  )
}

export default App

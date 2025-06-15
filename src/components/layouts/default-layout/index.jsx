import {
  NAV_BAR_AUTH_URLS,
  NAV_BAR_LOGO,
  NAV_BAR_MENUS,
} from '@/constants/navbar'

import Navbar from './navbar'

const DefaultLayout = ({ children }) => {
  return (
    <div className="lg:px-none container mx-auto px-4 transition-all">
      <header>
        <Navbar
          logo={NAV_BAR_LOGO}
          menus={NAV_BAR_MENUS}
          auth={NAV_BAR_AUTH_URLS}
        />
      </header>

      <main className="w-full">{children}</main>
    </div>
  )
}

export default DefaultLayout

import { Link } from 'react-router-dom'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Basic React</Link>
        </nav>
      </header>

      <main>{children}</main>
    </>
  )
}

export default DefaultLayout

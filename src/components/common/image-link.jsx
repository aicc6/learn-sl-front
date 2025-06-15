import { Link } from './link'

const ImageLink = ({ to, src, alt, children }) => {
  return (
    <Link to={to} className="flex items-center gap-2">
      <img src={src} className="max-h-8" alt={alt} />

      {children && children}
    </Link>
  )
}

export { ImageLink }

import { Link as RouterLink } from 'react-router-dom'

const Link = ({ className, to, children, ...props }) => {
  return (
    <RouterLink className={className} to={to} {...props}>
      {children}
    </RouterLink>
  )
}

export { Link }

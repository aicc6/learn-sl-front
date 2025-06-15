import { Button } from '../ui/button'
import { Link } from './link'

const LinkButton = ({
  to,
  title,
  children = title,
  variant,
  size,
  ...props
}) => {
  return (
    <Button asChild variant={variant} size={size} {...props}>
      <Link to={to}>{children}</Link>
    </Button>
  )
}

export { LinkButton }

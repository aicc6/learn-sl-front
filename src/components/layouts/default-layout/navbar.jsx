import { Menu } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { LinkButton } from '@/components/common/button-link'
import { ImageLink } from '@/components/common/image-link'
import { Link } from '@/components/common/link'
import { ThemeToggleButton } from './theme-toggle-button'

const Navbar = ({
  logo = {
    to: '/',
    src: '/vite.svg',
    alt: 'Logo',
    title: 'Logo Title',
  },
  menus = [],
  auth = {
    login: { title: 'Login', to: '#' },
    signUp: { title: 'Sign Up', to: '#' },
  },
}) => {
  return (
    <section className="py-4">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}

            <ImageLink to={logo.to} src={logo.src} alt={logo.alt}>
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </ImageLink>

            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menus.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex gap-2">
            <LinkButton variant="outline" size="sm" to={auth.login.to}>
              {auth.login.title}
            </LinkButton>

            <LinkButton size="sm" to={auth.signUp.to}>
              {auth.signUp.title}
            </LinkButton>

            <ThemeToggleButton />
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <ImageLink to={logo.to} src={logo.src} alt={logo.alt} />

            <div className="flex gap-2">
              <ThemeToggleButton />

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>

                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <ImageLink to={logo.to} src={logo.src} alt={logo.alt} />
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col gap-6 p-4">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menus.map((item) => renderMobileMenuItem(item))}
                    </Accordion>

                    <div className="flex flex-col gap-3">
                      <LinkButton to={auth.login.to} variant="outline">
                        {auth.login.title}
                      </LinkButton>

                      <LinkButton to={auth.signUp.to}>
                        {auth.signUp.title}
                      </LinkButton>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const renderMenuItem = (item) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>

        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <NavbarSubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    )
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        className="group bg-background hover:bg-muted hover:text-accent-foreground inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
        asChild
      >
        <Link to={item.to}>{item.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

const renderMobileMenuItem = (item) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>

        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <NavbarSubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    )
  }

  return (
    <Link key={item.title} to={item.to} className="text-md font-semibold">
      {item.title}
    </Link>
  )
}

const NavbarSubMenuLink = ({ item }) => {
  return (
    <Link
      className="hover:bg-muted hover:text-accent-foreground flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
      to={item.to}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  )
}

export default Navbar

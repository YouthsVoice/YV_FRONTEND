'use client'
import { useState, MouseEvent } from 'react'
import Link from 'next/link'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Badge,
  Menu,
  MenuItem,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { 
  ShoppingCart, 
  Person, 
  Menu as MenuIcon,
  Close,
  Store,
  AdminPanelSettings,
  Inventory,
  Assignment
} from '@mui/icons-material'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartContext'

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [mobileDrawer, setMobileDrawer] = useState(false)
  const { user, isAuthenticated, isAdmin, logout } = useAuth()
  const { cartCount } = useCart()
  
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    logout()
    handleClose()
    setMobileDrawer(false)
  }

  const toggleDrawer = (open: boolean) => () => {
    setMobileDrawer(open)
  }

  const navigationItems = [
    { href: '/ecom/products', label: 'Products', icon: <Inventory /> }
  ]

  if (isAdmin) {
    navigationItems.push({ href: '/ecom/admin/products', label: 'Admin', icon: <AdminPanelSettings /> })
  }

  return (
    <AppBar position="sticky" className="shadow-xl border-b border-blue-800 backdrop-blur-sm !bg-[#0A1931]">
      <Toolbar className="max-w-7xl mx-auto w-full px-4">
        {/* Logo */}
        <Link href="/ecom/" className="flex items-center space-x-3 mr-8 flex-shrink-0">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-2 rounded-xl shadow-lg">
            <Store className="text-white text-xl" />
          </div>
          <img 
            src='/YV_COLOR.webp' 
            alt="YouthsVoice" 
            className="h-8 w-auto hidden sm:block brightness-0 invert"
          />
          <Typography 
            variant="h6" 
            className="font-bold text-white sm:hidden"
          >
            YV
          </Typography>
        </Link>

        {/* Desktop Navigation */}
        <Box className="hidden md:flex flex-1 items-center space-x-1">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button 
                startIcon={item.icon}
                className="text-white hover:text-cyan-300 hover:bg-white/10 rounded-xl px-4 py-2 transition-all duration-200 font-medium"
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </Box>

        {/* User Actions */}
        <Box className="flex items-center space-x-2 ml-auto">
          {/* Cart */}
          <Link href="/ecom/cart">
            <IconButton 
              className="!text-white hover:text-cyan-300 hover:bg-white/10 transition-all duration-200 relative rounded-xl"
              size="large"
            >
              <Badge 
                badgeContent={cartCount} 
                color="error"
                overlap="circular"
                sx={{
                  '& .MuiBadge-badge': {
                    fontSize: '0.7rem',
                    height: '18px',
                    minWidth: '18px',
                    fontWeight: 'bold'
                  }
                }}
              >
                <ShoppingCart className='!text-white' />
              </Badge>
            </IconButton>
          </Link>

          {/* Mobile Menu Button */}
          <IconButton
            className="md:hidden !text-white hover:text-cyan-300 hover:bg-white/10 rounded-xl"
            onClick={toggleDrawer(true)}
            size="large"
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop User Menu */}
          {!isMobile && (
            <>
              {isAuthenticated ? (
                <>
                  <IconButton 
                    onClick={handleMenu}
                    className="text-white hover:text-cyan-300 hover:bg-white/10 transition-all duration-200 rounded-xl"
                    size="large"
                  >
                    <Person />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                      elevation: 8,
                      className: 'mt-2 rounded-xl shadow-2xl border border-gray-200 min-w-48'
                    }}
                  >
                    <MenuItem onClick={handleClose} className="px-4 py-3 hover:bg-blue-50 transition-colors">
                      <Link href="/ecom/orders" className="flex items-center space-x-3 w-full">
                        <Assignment className="text-blue-600" />
                        <span className="text-gray-800 font-medium">My Orders</span>
                      </Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem 
                      onClick={handleLogout} 
                      className="px-4 py-3 text-red-600 hover:bg-red-50 transition-colors font-medium"
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Box className="hidden md:flex space-x-3">
                  <Link href="/ecom/auth/login">
                    <Button className="text-white hover:text-cyan-300 font-medium border border-white/30 hover:border-cyan-300 px-6 rounded-xl transition-all duration-200">
                      Login
                    </Button>
                  </Link>
                  <Link href="/ecom/auth/register">
                    <Button 
                      variant="contained" 
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg px-6 font-medium rounded-xl transition-all duration-200"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </Box>
              )}
            </>
          )}
        </Box>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileDrawer}
          onClose={toggleDrawer(false)}
          PaperProps={{
            className: 'w-80 max-w-full bg-gradient-to-b from-[#0A1931] to-[#1E3A8A] text-white'
          }}
        >
          <Box className="p-6 h-full flex flex-col">
            {/* Drawer Header */}
            <Box className="flex items-center justify-between mb-8">
              <Typography variant="h5" className="font-bold text-black-200">
                Menu
              </Typography>
              <IconButton 
                onClick={toggleDrawer(false)}
                className=" hover:text-cyan-300"
              >
                <Close />
              </IconButton>
            </Box>

            <Divider className="mb-6 bg-white/20" />

            {/* Navigation Items */}
            <List className="space-y-2 flex-1">
              {navigationItems.map((item) => (
                <ListItem 
                  key={item.href} 
                  className="rounded-xl hover:bg-white/10 text-black-200 transition-colors mb-2"
                  onClick={toggleDrawer(false)}
                >
                  <Link href={item.href} className="flex items-center text-black-200 space-x-3 w-full py-3">
                    <div className="text-cyan-300">
                      {item.icon}
                    </div>
                    <ListItemText 
                      primary={item.label} 
                      primaryTypographyProps={{ className: ' text-black-200 font-medium' }}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>

            <Divider className="my-6 bg-white/20" />

            {/* User Section */}
            {isAuthenticated ? (
              <List className="space-y-2">
                <ListItem 
                  className="rounded-xl hover:bg-white/10 transition-colors mb-2"
                  onClick={toggleDrawer(false)}
                >
                  <Link href="/ecom/orders" className="flex items-center space-x-3 w-full py-3">
                    <Assignment className="text-cyan-300" />
                    <ListItemText 
                      primary="My Orders" 
                      primaryTypographyProps={{ className: 'text-white font-medium' }}
                    />
                  </Link>
                </ListItem>
                <ListItem 
                  className="rounded-xl hover:bg-red-500/20 text-red-400 transition-colors border border-red-400/30"
                  onClick={handleLogout}
                >
                  <ListItemText 
                    primary="Logout" 
                    primaryTypographyProps={{ className: 'font-medium text-center' }}
                  />
                </ListItem>
              </List>
            ) : (
              <Box className="space-y-4 p-2">
                <Link href="/ecom/auth/login" onClick={toggleDrawer(false)}>
                  <Button 
                    fullWidth 
                    variant="outlined" 
                    className="border-white text-white hover:border-cyan-300 hover:text-cyan-300 py-3 rounded-xl font-medium transition-all duration-200"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/ecom/auth/register" onClick={toggleDrawer(false)}>
                  <Button 
                    fullWidth 
                    variant="contained"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 py-3 rounded-xl font-medium shadow-lg transition-all duration-200"
                  >
                    Sign Up
                  </Button>
                </Link>
              </Box>
            )}
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}

export default Header
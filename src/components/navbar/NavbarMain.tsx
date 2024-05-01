
// Chakra Imports
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Link,
    Text,
    useColorModeValue
  } from '@chakra-ui/react'
  import { useState, useEffect } from 'react'
  import HeaderLinks from '@/components/navbar/NavbarLinksMain'
  import { isWindowAvailable } from '@/utils/navigation'
  
  export default function MainNavbar (props: {
    secondary: boolean
    message: string | boolean
    brandText: string
    logoText: string
    fixed: boolean
    onOpen: (...args: any[]) => any
  }) {
    const [scrolled, setScrolled] = useState(false)
  
    useEffect(() => {
      if (isWindowAvailable()) {
        // You now have access to `window`
        window.addEventListener('scroll', changeNavbar)
  
        return () => {
          window.removeEventListener('scroll', changeNavbar)
        }
      }
    })
  
    const { secondary, message, brandText } = props
  
    let navbarPosition = 'fixed' as const
    let navbarFilter = 'none'
    let navbarShadow = 'none'
    let navbarBorder = 'transparent'
    let secondaryMargin = '0px'
    let paddingX = '15px'
    let gap = '0px'
    const changeNavbar = () => {
      if (isWindowAvailable() && window.scrollY > 1) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
  
    return (
      <Box
        position={navbarPosition}
        boxShadow={navbarShadow}
        borderColor={navbarBorder}
        filter={navbarFilter}
        // backdropFilter={navbarBackdrop}
        backgroundPosition='center'
        backgroundSize='cover'
        borderRadius='16px'
        borderWidth='1.5px'
        borderStyle='solid'
        transitionDelay='0s, 0s, 0s, 0s'
        transitionDuration=' 0.25s, 0.25s, 0.25s, 0s'
        transition-property='box-shadow, background-color, filter, border'
        transitionTimingFunction='linear, linear, linear, linear'
        alignItems={{ xl: 'center' }}
        display={secondary ? 'block' : 'flex'}
        minH='75px'
        justifyContent={{ xl: 'center' }}
        lineHeight='25.6px'
        mx='auto'
        mt={secondaryMargin}
        pb='8px'
        right={{ base: '12px', md: '30px', lg: '30px', xl: '30px' }}
        px={{
          sm: paddingX,
          md: '10px'
        }}
        ps={{
          xl: '12px'
        }}
        pt='8px'
        top={{ base: '12px', md: '16px', xl: '18px' }}
        w={{
          base: 'calc(100vw - 6%)',
          sm: 'calc(100vw - 10%)',
          md: 'calc(100vw - 8%)',
          lg: 'calc(100vw - 6%)',
          xl: 'calc(100vw - 350px)',
          '2xl': 'calc(100vw - 365px)'
        }}
      >
        <Flex
          w='100%'
          flexDirection={{
            sm: 'column',
            md: 'row'
          }}
          alignItems={{ xl: 'center' }}
          mb={gap}
        >
          
          <Box ms='auto' w={{ sm: '100%', md: 'unset' }}>
            <HeaderLinks
              onOpen={props.onOpen}
              secondary={props.secondary}
              fixed={props.fixed}
            />
          </Box>
        </Flex> 
      </Box>
    )
  }
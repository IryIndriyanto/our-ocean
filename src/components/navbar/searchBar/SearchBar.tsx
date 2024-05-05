import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Popover,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  useColorModeValue,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { ILocation } from '@/types/location'
import { ChangeEvent, useRef, useState } from 'react'
import useLocation from '@/hooks/useLocation'
import { InputRightElement } from '@chakra-ui/react'

export function SearchBar(props: {
  variant?: string
  background?: string
  children?: JSX.Element
  placeholder?: string
  borderRadius?: string | number
  [x: string]: any
}) {
  // Pass the computed styles into the `__css` prop
  const { variant, background, children, placeholder, borderRadius, ...rest } =
    props
  const searchIconColor = useColorModeValue('gray.700', 'white')
  const inputBg = useColorModeValue('secondaryGray.300', 'navy.900')
  const inputText = useColorModeValue('gray.700', 'gray.100')
  const [searchTerm, setSearchTerm] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const popoverRef = useRef<HTMLButtonElement>(null)

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  const handleInputBlur = () => {
    popoverRef.current?.click()
  }

  return (
    <InputGroup w={{ base: '100%', md: '300px' }} {...rest}>
      <InputRightElement>
        <IconButton
          aria-label="search"
          bg="inherit"
          borderRadius="inherit"
          _active={{
            bg: 'inherit',
            transform: 'none',
            borderColor: 'transparent',
          }}
          _focus={{
            boxShadow: 'none',
          }}
          icon={<SearchIcon color={searchIconColor} w="15px" h="15px" />}
        />
      </InputRightElement>
      <Popover initialFocusRef={inputRef}>
        <PopoverTrigger>
          <Input
            id="search"
            variant="search"
            fontSize="sm"
            bg={background ? background : inputBg}
            color={inputText}
            fontWeight="500"
            _placeholder={{ color: 'gray.400', fontSize: '14px' }}
            borderRadius={borderRadius ? borderRadius : '30px'}
            placeholder={placeholder ? placeholder : 'Search...'}
            ref={inputRef}
            value={searchTerm}
            onChange={handleSearchChange}
            onBlur={handleInputBlur}
            autoComplete="off"
          />
        </PopoverTrigger>
        <PopoverContent
          borderRadius={30}
          p={5}
          top={3}
          left={{ base: '10vw', md: '68px', xl: '48px' }}
          zIndex={2}
          h={200}
          w={{
            base: '80vw',
            md: '450px',
            xl: '430px',
          }}
        >
          <PopoverCloseButton ref={popoverRef} display={'none'} />
          {searchTerm || 'No search entered'}
        </PopoverContent>
      </Popover>
    </InputGroup>
  )
}

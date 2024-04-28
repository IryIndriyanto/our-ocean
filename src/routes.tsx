import { Icon } from '@chakra-ui/react';
import {
  MdHistory,
  MdPerson,
  MdHome,
  MdLock,
  MdBookmark,
} from 'react-icons/md';

import { IRoute } from '@/types/navigation';

const routes: IRoute[] = [
  {
    name: 'Map',
    layout: '/main',
    path: '/map',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Bookmarks',
    layout: '/main',
    path: '/bookmarks',
    icon: (
      <Icon
        as={MdBookmark}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    secondary: true,
  },
  {
    name: 'History',
    layout: '/main',
    icon: <Icon as={MdHistory} width="20px" height="20px" color="inherit" />,
    path: '/History',
  },
  {
    name: 'Profile',
    layout: '/main',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  },
];

export default routes;
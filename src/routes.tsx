import { Icon } from '@chakra-ui/react';
import {
  MdHistory,
  MdPerson,
  MdHome,
  MdLock,
  MdBookmark,
} from 'react-icons/md';

// Admin Imports
// import MainDashboard from './pages/admin/default';
// import NFTMarketplace from './pages/admin/nft-marketplace';
// import Profile from './pages/admin/profile';
// import DataTables from './pages/admin/data-tables';
// import RTL from './pages/rtl/rtl-default';

// Auth Imports
// import SignInCentered from './pages/auth/sign-in';
import { IRoute } from '@/types/navigation';

const routes: IRoute[] = [
  {
    name: 'Navigation',
    layout: '/main',
    path: '/default',
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
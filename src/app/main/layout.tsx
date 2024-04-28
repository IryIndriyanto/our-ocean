"use client";
// Chakra imports
import {
  Portal,
  Box,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
// Layout components
import Navbar from "@/components/navbar/NavbarMain";
import Sidebar from "@/components/sidebar/Sidebar";
import { SidebarContext } from "@/contexts/SidebarContext";
import { useEffect, useState } from "react";
import routes from "@/routes";
import {
  getActiveNavbar,
  getActiveNavbarText,
  getActiveRoute,
  isWindowAvailable,
} from "@/utils/navigation";

// interface DashboardLayoutProps extends PropsWithChildren {
//   [x: string]: any;
// }

// Custom Chakra theme
export default function AdminLayout(props: any) {
  const { children, ...rest } = props;
  // states and functions
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  // functions for changing the states from components
  const { onOpen } = useDisclosure();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.document.documentElement.dir = "ltr";
    }
  });

  const bg = useColorModeValue("secondaryGray.300", "navy.900");

  return (
    <Box h="100vh" w="100vw" bg={bg}>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      >
        <Sidebar routes={routes} display="none" {...rest} />
        <Box
          float="right"
          minHeight="100vh"
          height="100%"
          overflow="auto"
          position="relative"
          maxHeight="100%"
          w={{ base: "100%", xl: "calc( 100% - 240px )" }}
          maxWidth={{ base: "100%", xl: "calc( 100% - 240px )" }}
          transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
          zIndex='0'
        >
          <Portal>
            <Box>
              <Navbar
                onOpen={onOpen}
                logoText={"Horizon UI Dashboard PRO"}
                brandText={getActiveRoute(routes)}
                secondary={getActiveNavbar(routes)}
                message={getActiveNavbarText(routes)}
                fixed={fixed}
                {...rest}
              />
            </Box>
          </Portal>

          <Box
            mx="auto"
            // p={{ base: '20px', md: '30px' }}
            // pe="20px"
            minH="100vh"
            // pt="50px"
          >
            {children}
          </Box>
          <Box></Box>
        </Box>
      </SidebarContext.Provider>
    </Box>
  );
}

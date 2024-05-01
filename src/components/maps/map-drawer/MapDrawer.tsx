import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  extendTheme,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronLeftIcon } from "@chakra-ui/icons";

const MapDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Custom component variants
  

  // Extend the theme

  return (
    <>
      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="Open drawer"
        onClick={onOpen}
        position="fixed"
        top={40}
        right={4}
      />

      <Drawer
        trapFocus={false}
        size="sm"
        onClose={onClose}
        isOpen={isOpen}
        closeOnOverlayClick={false}
        variant='clickThrough'
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Drawer Title</DrawerHeader>

          <DrawerBody>{/* Content of the drawer */}</DrawerBody>

          <DrawerFooter>{/* Footer of the drawer */}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MapDrawer;

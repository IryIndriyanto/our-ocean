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
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const MapDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const placement:"bottom" | "right" | undefined  = useBreakpointValue({ base: "bottom", md: "right" });
  const size = useBreakpointValue({ base: "full", md: "sm" })

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
        size={size}
        onClose={onClose}
        isOpen={isOpen}
        closeOnOverlayClick={false}
        variant="clickThrough"
        placement={placement? placement:'right'}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent pt={{md:'110px'}}>
          <DrawerCloseButton top={{md:'120px'}}/>
          <DrawerHeader>Drawer Title</DrawerHeader>

          <DrawerBody>{/* Content of the drawer */}</DrawerBody>

          <DrawerFooter>{/* Footer of the drawer */}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MapDrawer;

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";

const MapDrawer = ({ onClose, isOpen }: any) => {
  const placement: "bottom" | "right" | undefined = useBreakpointValue({
    base: "bottom",
    md: "right",
  });
  const size = useBreakpointValue({ base: "full", md: "sm" });

  return (
    <>
      <Drawer
        trapFocus={false}
        size={size}
        onClose={onClose}
        isOpen={isOpen}
        closeOnOverlayClick={false}
        variant="clickThrough"
        placement={placement ? placement : "right"}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent pt={{ base: "50px", md: "110px" }}>
          <DrawerCloseButton top={{ base: "50px", md: "120px" }} />
          <DrawerHeader>Drawer Title</DrawerHeader>

          <DrawerBody>{/* Content of the drawer */}</DrawerBody>

          <DrawerFooter>{/* Footer of the drawer */}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MapDrawer;

export const components = {
  // Drawer variant to allow pointer events to the underlying content
  Drawer: {
    variants: {
      clickThrough: {
        overlay: {
          pointerEvents: 'none',
          background: 'transparent',
        },
        dialogContainer: {
          pointerEvents: 'none',
          background: 'transparent',
        },
        dialog: {
          pointerEvents: 'auto',
        },
      },
    },
  },
}

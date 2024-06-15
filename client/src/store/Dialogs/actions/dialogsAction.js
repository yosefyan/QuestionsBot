export const openDialog = (whichDialog) => ({
  type: "OPEN_DIALOG",
  payload: {
    whichDialog,
  },
});

export const closeDialog = (whichDialog) => ({
  type: "CLOSE_DIALOG",
  payload: {
    whichDialog,
  },
});

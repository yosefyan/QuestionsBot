export const openDialog = (whichDialog, neededDialogIndex) => ({
  type: "OPEN_DIALOG",
  payload: {
    whichDialog,
    neededDialogIndex
  },
});

export const closeDialog = (whichDialog) => ({
  type: "CLOSE_DIALOG",
  payload: {
    whichDialog,
  },
});

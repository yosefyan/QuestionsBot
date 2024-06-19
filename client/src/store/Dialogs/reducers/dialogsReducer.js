const dialogState = {
  regularDialog: {
    neededDialogIndex: 0,
    shouldOpen: false,
  },
  areYouSureDialog: {
    shouldOpen: false,
  },
};

const dialogsReducer = (state = dialogState, action) => {
  const objShouldOpenFalse = { shouldOpen: false };
  const putMatchingObject = (neededString) => {
    return neededString === "regularDialog"
      ? { ...objShouldOpenFalse, neededDialogIndex }
      : objShouldOpenFalse;
  };
  const { whichDialog, neededDialogIndex } = action.payload || "";
  switch (action.type) {
    case "OPEN_DIALOG":
      return {
        ...state,
        [whichDialog]: {
          neededDialogIndex,
          shouldOpen: true,
        },
      };
    case "CLOSE_DIALOG":
      if (whichDialog === "ALL") {
        return Object.keys(state).reduce((newState, innerKey) => {
          newState[innerKey] = putMatchingObject(innerKey);
          return newState;
        }, {});
      } else if (state[whichDialog]) {
        return {
          ...state,
          [whichDialog]: putMatchingObject(state[whichDialog]),
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default dialogsReducer;

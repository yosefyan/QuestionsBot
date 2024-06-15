const dialogState = {
  regularDialog: {
    shouldOpen: false,
  },
  areYouSureDialog: {
    shouldOpen: false,
  },
};

const dialogsReducer = (state = dialogState, action) => {
  const { whichDialog } = action.payload || "";
  switch (action.type) {
    case "OPEN_DIALOG":
      return {
        ...state,
        [whichDialog]: {
          shouldOpen: true,
        },
      };
    case "CLOSE_DIALOG":
      if (whichDialog === "ALL") {
        return Object.keys(state).reduce((newState, innerKey) => {
          newState[innerKey] = { shouldOpen: false };
          return newState;
        }, {});
      } else if (state[whichDialog]) {
        return {
          ...state,
          [whichDialog]: { shouldOpen: false },
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default dialogsReducer;

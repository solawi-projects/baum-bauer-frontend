/**
 *
 * @param {*} state
 * @param {*} action
 * @returns
 */
export const paymentSessionReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SESSION":
      return { ...state, sid: action.sessionId };
    case "RESET_SESSION":
      return { ...state, sid: "" };
    default:
      return state;
  }
};

/**
 *
 * @param {*} state
 * @param {*} action
 * @returns
 */
export const patronReducer = (state, action) => {
  console.log("ACTION", action);
  switch (action.type) {
    case "ADD_PATRON":
      return { ...state, patronInfo: action.newPatron };
    case "REMOVE_PATRON":
      return { ...state, patronInfo: {} };
    default:
      return state;
  }
};

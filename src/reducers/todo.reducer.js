import { ERROR_DATA, GETTING_DATA, GOT_DATA } from "../types/types.redux";

const initialState = {
  data: [],
  pending: false,
  error: "",
};

/**
 *
 * @param {object} state
 * @param {object} action
 * @returns
 */
export const addTodo = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_DATA:
      return {
        ...state,
        pending: false,
        error: false,
      };

    case ERROR_DATA:
      return {
        ...state,
        pending: false,
        error: true,
      };

    case GOT_DATA:
      return {
        ...state,
        data: action.payload,
        pending: false,
        error: false,
      };

    default:
      return state;
  }
};

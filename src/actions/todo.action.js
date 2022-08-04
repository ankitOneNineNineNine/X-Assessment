import { ERROR_DATA, GETTING_DATA, GOT_DATA } from "../types/types.redux";

/**
 * Async Action Function
 * @param {string} url
 * @returns Function
 */
export const getTodos = (url) => async (dispatch) => {
  try {
    dispatch({
      type: GETTING_DATA,
    });
    const response = await fetch(url);
    const data = await response.json();

    return dispatch({
      type: GOT_DATA,
      payload: data,
    });
  } catch (e) {
    return dispatch({
      type: ERROR_DATA,
      payload: e,
    });
  }
};

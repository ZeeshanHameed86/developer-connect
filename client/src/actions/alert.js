import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (msg, alertType) => async (disptach) => {
  const id = uuid.v4();
  dispatchEvent({ type: SET_ALERT, payload: { msg, alertType, id } });
};

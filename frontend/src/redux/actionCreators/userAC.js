import { REG_USER } from "../actionTypes/userAT"

export const addUserAC = (payload) => {
  return {
    type: REG_USER,
    payload
  }
}

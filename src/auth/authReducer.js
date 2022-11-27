import { types } from "../types/types";

const initUser = {
  isAuthenticated: false,
  user: null
}

export const authInitState = () => {
  return localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : initUser;
}

export const authReducer = (state = authInitState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      }
    case types.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }
    default:
      return state;
  }
}

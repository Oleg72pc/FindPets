import { sessionUserAC, logUserAC, addUserAC } from '../actionCreators/userAC';

export const getFetchUserSessionAC = () => {
  return (dispatch) => {
    fetch('/auth/session')
      .then((data) => data.json())
      .then((data) => {
        dispatch(sessionUserAC(data));
      });
  }
}

export const postFetchUserLoginAC = (payload) => {
  return (dispatch) => {
    fetch('/auth/login', {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(logUserAC(data));
      });
  }
}

export const postFetchUserRegistrationAC = (payload) => {
  return (dispatch) => {
     fetch('auth/registration', {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => dispatch(addUserAC(data)));

  }
}


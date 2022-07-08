import { 
  sessionUserAC, 
  logUserAC,
  addUserAC,
  logoutUserAC } from '../actionCreators/userAC';
import { initAdvetrsAC } from '../actionCreators/advertsAC';

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

export const getFetchInitAdvertsAC = () => {
  return (dispatch) => {
    fetch('/ad')
    .then((res) => res.json())
    .then((result) => {
      dispatch(initAdvetrsAC(result));
    });
  }
}


export const getFetchLogoutUserAC = () => {
  return (dispatch) => {
    fetch('/auth/logout')
      .then((data) => data.json())
      .then((data) => {
        dispatch(logoutUserAC(data));
      });
  }
}

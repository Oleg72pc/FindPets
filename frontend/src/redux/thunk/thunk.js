import { 
  sessionUserAC, 
  logUserAC,
  addUserAC,
  logoutUserAC,
  logUserErrorAC,
  addUserErrorAC,
  addFormUserErrorAC,
  addFormUserAC,
} from '../actionCreators/userAC';
import { initAdvetrsAC, addAdvertAC, addPhotoAC, initCommetnAC } from '../actionCreators/advertsAC';

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
        if(data.id){
          dispatch(logUserAC(data));
        } else {
          dispatch(logUserErrorAC(data))
        }
      });
  }
}

export const postFetchAddAdventAC = (payload) => {
  return (dispatch) => {
    fetch('/ad/add', {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.id){
          dispatch(addAdvertAC(data));
          dispatch(addFormUserAC(data))
        } else {
          dispatch(addFormUserErrorAC(data))
        }
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
      .then((data) => {
          if(data.id){
            dispatch(addUserAC(data));
          } else {
            dispatch(addUserErrorAC(data))
          }
      });
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

export const addPhoto = (payload) => {
  return (dispatch) => {
    fetch("/ad", {
      method: "POST",
      body: payload,
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(addPhotoAC(data)
      )});
  }
}

export const postFetchaddComment = (payload) => {
  return (dispatch) => {

    fetch(`/ad/${payload}`)
      .then((res) => res.json())
      .then((result) => {
        dispatch(initCommetnAC(result));
      });
  }
}

export const postFetchUserRegistrationFormAC = (payload) => {
  return (dispatch) => {
     fetch('auth/registration', {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
          if(data.id){
            dispatch(addUserAC(data));
          } else {
            dispatch(addUserErrorAC(data))
          }
      });
  }
}

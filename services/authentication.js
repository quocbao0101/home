/* eslint-disable max-len */
import { BehaviorSubject } from 'rxjs';
import { apiBase } from './instance';
import { USER_LOCAL_STORE } from '../constants';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem(USER_LOCAL_STORE)));

const login = (userData) => apiBase({
  method: 'post',
  url: '/api/auth/signin',
  data: userData,
});

const loginFacebook = (data) => apiBase({
  method: 'post',
  url: `/api/facebook-connection/save-token/?accessToken=${data}`,
});

const loginGoogle = (code) => apiBase({
  method: 'post',
  url: `/api/google-analytics/save-ga-token?code=${code}`,
});

function updateUser(data) {
  localStorage.setItem(USER_LOCAL_STORE, JSON.stringify(data));
  currentUserSubject.next(data);
}

function logout() {
  localStorage.removeItem(USER_LOCAL_STORE);
  currentUserSubject.next(null);
}

const signup = (userData) => apiBase({
  method: 'post',
  url: '/api/auth/signup',
  data: userData,
});

const verify = (userData) => apiBase({
  method: 'post',
  url: '/api/auth/verify-code',
  data: userData,
});

const forgotPasswordByEmail = (email) => apiBase({
  method: 'post',
  url: '/api/auth/forgot-password',
  data: { email },
});

const verifyCodeByEmail = (userData) => apiBase({
  method: 'post',
  url: '/api/auth/verify-code/email',
  data: userData,
});

const resetPassword = (userData) => apiBase({
  method: 'post',
  url: '/api/auth/change-password',
  data: userData,
});

const authenticationService = {
  login,
  logout,
  signup,
  verify,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() { return currentUserSubject.value; },
  updateUser,
  forgotPasswordByEmail,
  verifyCodeByEmail,
  resetPassword,
  loginFacebook,
  loginGoogle,
};

export default authenticationService;

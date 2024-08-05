const port = process.env.REACT_APP_PORT || '3000';

export const KAKAO_REDIRECT_URI = `http://localhost:${port}/auth?type=kakao`;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

export const GOOGLE_REDIRECT_URI = `https://ephemeral-bonbon-d867dc.netlify.app/auth?type=google`;
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=137081432785-0rhjqb5shd67ov2ec4escraufk5fd6kt.apps.googleusercontent.com&redirect_uri=https://ephemeral-bonbon-d867dc.netlify.app/auth?type=google&response_type=code&scope=email`;

export const STATE = Math.random().toString(36).substr(2, 11);
export const NAVER_REDIRECT_URI = `http://localhost:${port}/auth?type=naver`;
export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${NAVER_REDIRECT_URI}`;

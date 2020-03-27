// TODO move to settings file
const baseURL = "http://localhost:8000";

// Auth
export const tokenLoginURL = `${baseURL}/auth/token/login/`;
export const userDetailsURL = `${baseURL}/auth/users/me/`;
export const userURL = `${baseURL}/auth/users/`;

// Backend API
const baseAPIURL = `${baseURL}/api/`;
export const newsItemsURL = `${baseAPIURL}news-items/`;
export const newsTypesURL = `${baseAPIURL}news-types/`;
export const topicsURL = `${baseAPIURL}topics/`;
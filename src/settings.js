export const localStorageAuthTokenKey = "fixTheNewsAuthToken";

// Internal routes
export const addNewsItemRoute = "/add-news-item/";
export const loginRoute = "/login/";
export const mobileMainMenuRoute = "/mobile-main-menu/";
export const registrationRoute = "/sign-up/";
export const userNotLoggedInRoute = "/restricted-action/";

// TODO move to settings file
const baseURL = "http://localhost:8000/api";

// Auth
export const tokenLoginURL = `${baseURL}/authentication/token/login/`;
export const userDetailsURL = `${baseURL}/authentication/users/me/`;
export const userURL = `${baseURL}/authentication/users/`;

// Backend API
export const newsItemsURL = `${baseURL}/news-items/`;
export const topicsURL = `${baseURL}/topics/`;

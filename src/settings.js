export const localStorageAuthTokenKey = "fixTheNewsAuthToken";

// Internal routes
export const addNewsItemRoute = "/add-news-item/";
export const editUserRoute = "/edit-user/";
export const loginRoute = "/login/";
export const mobileMainMenuRoute = "/mobile-main-menu/";
export const desktopMainMenuRoute = "/desktop-main-menu/";
export const registrationRoute = "/sign-up/";
export const shareTopicRoute = "/share-topic/";
export const topicRoute = "/topic/:slug";
export const userNotLoggedInRoute = "/restricted-action/";

const developmentBaseURL = "http://localhost:8000/api";
const baseURL = process.env.REACT_APP_BACKEND_API_URL || developmentBaseURL;

// Auth
export const tokenLoginURL = `${baseURL}/authentication/token/login/`;
export const userDetailsURL = `${baseURL}/authentication/users/me/`;
export const userURL = `${baseURL}/authentication/users/`;

// Backend API
export const commentsURL = `${baseURL}/comments/`;
export const likesURL = `${baseURL}/likes/`;
export const newsItemsURL = `${baseURL}/news-items/`;
export const topicsURL = `${baseURL}/topics/`;

export const TOPIC_PAGE_SIZE_FOR_MOBILE = 3;

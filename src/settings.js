export const localStorageAuthTokenKey = "fixTheNewsAuthToken";

// Internal routes
export const aboutCommunicationRoute = "/about-us/";
export const privacyRoute = "/privacy/";
export const topicRoute = "/topic/:slug";

const developmentBaseURL = "http://localhost:8000/api";
const baseURL = process.env.REACT_APP_BACKEND_API_URL || developmentBaseURL;

// Auth
export const tokenLoginURL = `${baseURL}/authentication/token/login/`;
export const userDetailsURL = `${baseURL}/authentication/users/me/`;
export const userURL = `${baseURL}/authentication/users/`;

// Backend API
export const commentsURL = `${baseURL}/comments/`;
export const communicationsURL = `${baseURL}/communications/`;
export const likesURL = `${baseURL}/likes/`;
export const messagesURL = `${baseURL}/messages/`;
export const newsItemsURL = `${baseURL}/news-items/`;
export const topicsURL = `${baseURL}/topics/`;

// Cookies keys
export const hasViewedWelcomeCommunicationCookieKey =
  'has-viewed-welcome-communication';

// View settings
export const TOPIC_PAGE_SIZE_FOR_MOBILE = 10;
export const TOPIC_PAGE_SIZE_FOR_DESKTOP = 30;
export const LIST_VIEW = true;
export const FORCE_SCROLLING_NEWS_ITEMS_FOR_DESKTOP = true;

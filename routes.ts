/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {Array<string>}
 */
export const publicRoutes = [
  '/',
  '/courses',
  '/about-us',
  '/mentoring',
  '/faq',
  '/blog',
  '/offert',
  '/policy'
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logger in user to /settings
 * @type {Array<string>}
 */
export const authRoutes = [
  '/auth/sign-in',
  '/auth/sign-up',
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * Default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/dashboard';

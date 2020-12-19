const NEWS_API_KEY = '2717a5b4174d431c9f39a247c423b7bb';
const BASE_URL = 'https://newsapi.org/v2';

const REQUEST = 'REQUEST';
const SUCCESS = '_SUCCESS';
const FAILURE = '_FAILURE';

const COLORS = {
  black: 'black',
  lightgrey: '#D8D8D8',
  darkerGrey: '#989898',
  white: 'white',
  primaryGreen: '#20BA68',
  transparentWhite: 'rgba(255, 255, 255, 0.8)',
  error: 'red',
  yellow: '#FFC300',
};

const AUTH_ERRORS = {
  SIGN_UP_FAILURE: 'Failed to sign up.',
  SIGN_IN_FAILURE: 'Failed to sign in.',
};

export {NEWS_API_KEY, BASE_URL, SUCCESS, FAILURE, REQUEST, COLORS, AUTH_ERRORS};

export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 404,
  CONFLICT: 409,
  GENERIC_ERROR: -1
}

export const APP_ROUTES = {
  HOMEPAGE: "/",
  PORTFOLIO: "/portfolio",
  ABOUT: "/portfolio#about",
  EXPERIENCE: "/portfolio#experience",
  EXTRAS: "/portfolio#extras",
  TYPING_TEST: "/typing_test"
}

export const API_ROUTES = {
  GET_ALL_DATA: "/users",
  ADD_DATA: "/users",
  GET_RANK: "/rank",
  SEND_EMAIL: "/message"
}

export const BASE_URL = "https://paulportfoliobackend.com";

export const LOCALHOST_URL = "http://localhost:3002";
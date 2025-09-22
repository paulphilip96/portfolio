export const BACKGROUND_VIDEO_URL = "https://s3.ca-central-1.amazonaws.com/pphilip.com/homepage/homepage_video.mp4";

export const APP_ROUTE_IDS = {
  ABOUT: "about",
  EXPERIENCE: "experience",
  EXTRAS: "extras"
}

export const APP_ROUTES = {
  HOMEPAGE: "/",
  PORTFOLIO: "/portfolio",
  ABOUT: `/portfolio#${APP_ROUTE_IDS.ABOUT}`,
  EXPERIENCE: `/portfolio#${APP_ROUTE_IDS.EXPERIENCE}`,
  EXTRAS: `/portfolio#${APP_ROUTE_IDS.EXTRAS}`,
  TYPING_TEST: "/typing_test",
  HOLIDAY: "/holiday"
}

export const NAVIGATION = [
  { path: APP_ROUTES.HOMEPAGE, label: "Home" },
  { path: APP_ROUTES.ABOUT, label: "About" },
  { path: APP_ROUTES.EXPERIENCE, label: "Experience" },
  { path: APP_ROUTES.EXTRAS, label: "Extras" },
];


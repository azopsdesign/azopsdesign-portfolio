import { getRequestURL, sendRedirect } from "h3";

export default defineEventHandler((event) => {
  const url = getRequestURL(event);

  if (
    url.pathname === "/projects" || url.pathname === "/projects/"
  ) {
    return sendRedirect(event, '/', 301);
  }

});
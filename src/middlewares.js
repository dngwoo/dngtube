export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "dngtube";
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};

export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "dngtube";
  next();
};
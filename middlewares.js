import routes from "./routes"

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'WETUBE'
  res.locals.routes = routes
  next()
}
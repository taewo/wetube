import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    console.log('localsMiddleware');
    
    res.locals.siteName = 'Wetube'
    res.locals.routes = routes
    // next()
}
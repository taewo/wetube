import multer from 'multer'
import routes from './routes'

const multerVideo = multer({ dest: 'video/' })

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'Wetube'
    res.locals.routes = routes
    res.locals.user = {
        isAuthenticated: true,
        id: 1,
    }
    next()
}

export const uploadVideo = multerVideo.single('videoFile')

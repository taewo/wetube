import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import globalRouter from './routers/globalRouter'
import userRouter from './routers/userRouter'
import videoRouter from './routers/videoRouter'
import routes from './routes'
import { localsMiddleware } from './middlewares'

const app = express()

app.use(helmet())
app.set('view engine', 'pug')
app.use('/uploads', express.static('uploads'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(localsMiddleware)

app.use(routes.home, globalRouter)
app.use(routes.user, userRouter)
app.use(routes.videos, videoRouter)

export default app

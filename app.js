import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { userRouter } from './router';
const app = express()

const handleHome = (req, res) => {res.send('hello world')}

const handleProfile = (req, res) => {res.send('profile')}

const betweenHome = (req, res, next) => {
    console.log('im between')
    next()
}
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(helmet())

app.use(betweenHome)

app.get('/', handleHome)

app.get('/profile', handleProfile)

app.use('/user', userRouter)

export default app;
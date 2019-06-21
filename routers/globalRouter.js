import express from 'express';
import routes from '../routes';

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send('Home'));
globalRouter.get(routes.join, (req, res) => res.send('JOIN'));
globalRouter.get(routes.login, (req, res) => res.send('LOGIN'));
globalRouter.get(routes.logout, (req, res) => res.send('LOGOUT'));
globalRouter.get(routes.search, (req, res) => res.send('SEARCH'));


export default globalRouter;
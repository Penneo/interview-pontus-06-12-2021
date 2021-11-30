import { Express, NextFunction, Request, Response, Router } from 'express';
import HomeController from './controller/home.controller';
import {getByCoords, getById, getByName} from "./controller/weather";

export default class ExpressRouter {
  public router: Router;
  private app: Express;

  constructor(app: Express) {
    this.router = Router();
    this.app = app;
  }

  public init(): void {
    this.router.get('/', HomeController.getDefault);
    this.router.get('/weather/current/by-name/:location(\\S{0,})', getByName);
    this.router.get('/weather/current/by-coords', getByCoords);
    this.router.get('/weather/current/:id', getById);
    this.app.use('/', this.router);
  }
}

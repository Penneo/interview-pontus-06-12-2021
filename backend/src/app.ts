import * as dotenv from 'dotenv';
import express from 'express';
import ExpressRouter from './express.router';

dotenv.config();

const app = express();
const expressRoutes = new ExpressRouter(app);
expressRoutes.init();

const port = process.env.HAPPY_PORT || 9080;

app.listen(port, () => {
  console.log(`Express server app listening on port ${port}!`);
});

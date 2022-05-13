
import express from 'express';
import cors from 'cors';

const createApp = (routes) => {
  const app = express();

  // Set up body and URL parsers
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(routes);

  return app;
};

export default createApp;

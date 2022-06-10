import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config'

import routes from './routes/task.v1.routes.js'

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1/', routes);

app.set('port', process.env.PORT || 3000);

export default app;
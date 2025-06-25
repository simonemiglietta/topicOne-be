import 'express-async-errors';
import express from 'express';
import routes from './routes/index.routes'
import dotenv from 'dotenv';

import {errorHandler} from "./middlewares/errors";

const app = express();
const port = 3000;

app.use(express.json());

dotenv.config();
app.use('/', routes);
app.use(errorHandler);

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

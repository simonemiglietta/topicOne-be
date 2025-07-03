import 'express-async-errors';
import express from 'express';
import routes from './routes/index.routes'
import dotenv from 'dotenv';
import './subscribers/messageKeywordsUpdate';
import './subscribers/threadKeywordsUpdate';

import {errorHandler} from "./middlewares/errors";
import {MessageContainer} from "./containers/message.container";
import {MessageExtractor} from "./entities/extractor.entity";
import {MessageService} from "./services/message.service";
import {ThreadService} from "./services/thread.service";

const app = express();
const port = 3000;

app.use(express.json());

dotenv.config();
const extractor = new MessageExtractor();
const messageService = new MessageService(extractor);
const threadService = new ThreadService(messageService);

const messageContainer = new MessageContainer(
    messageService,
    threadService,
    extractor
)

app.use('/', routes(messageContainer));
app.use(errorHandler);

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

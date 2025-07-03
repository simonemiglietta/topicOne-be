import {Router} from 'express';
import {createMessage, getMessages} from '../controllers/message.controller';
import {validate} from "../middlewares/validates";
import {createMessageSchema} from "../schemas/message.schema";
import {createThreadSchema} from "../schemas/thread.schema";
import {createThread} from "../controllers/thread.controller";
import {MessageContainer} from "../containers/message.container";

export default function createRoutes(container: MessageContainer) {
    const router = Router();

    router.get('/messages', getMessages);
    router.post('/messages', validate(createMessageSchema), createMessage(container.messageService));

    router.post('/thread', validate(createThreadSchema), createThread(container.threadService));

    return router;
}
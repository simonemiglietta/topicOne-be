import {Router} from 'express';
import {createMessage, getMessages} from '../controllers/message.controller';
import {validate} from "../middlewares/validates";
import {createMessageSchema} from "../schemas/message.schema";

const router = Router();

router.get('/',getMessages);
router.post('/',validate(createMessageSchema), createMessage);

export default router;

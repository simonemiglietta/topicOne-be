import { z } from 'zod';
import { createMessageSchema } from '../schemas/message.schema';

export type CreateMessageInput = z.infer<typeof createMessageSchema>;

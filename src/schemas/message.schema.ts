import {z} from 'zod';

export const createMessageSchema = z.object({
    email: z.string().email(),
    content: z.string().min(1, 'Il contenuto è obbligatorio'),
});

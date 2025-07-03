import {z} from 'zod';

export const createThreadSchema = z.object({
    email: z.string().email(),
    content: z.string().min(1, 'Il contenuto è obbligatorio'),
    subject: z.string().min(1, 'Il contenuto è obbligatorio'),
});

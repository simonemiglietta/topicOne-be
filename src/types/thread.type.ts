import {z} from 'zod';
import {createThreadSchema} from "../schemas/thread.schema";

export type CreateThreadInput = z.infer<typeof createThreadSchema>;


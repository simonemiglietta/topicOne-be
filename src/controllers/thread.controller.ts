import {Request, Response} from 'express';
import {prisma} from '../prisma';
import {ThreadService} from "../services/thread.service";
import {CreateThreadInput} from "../types/thread.type";

;

export const indexThreads = async (req: Request, res: Response) => {
    const messages = await prisma.thread.findMany();
    res.json(messages);
};

export const showThread = async (req: Request, res: Response) => {
    const {id} = req.params;
    const messages = await prisma.thread.findUnique({where: {id: id}});
    res.json(messages);
};

export const createThread = (threadService: ThreadService) => async (req: Request<{}, {}, CreateThreadInput>, res: Response) => {
    const {content, email, subject} = req.body;

    const message = await threadService.createThread({email, content, subject});
    return res.status(201).json(message);

};

export const deleteMessage = async (req: Request, res: Response) => {
    const {id} = req.params;
    await prisma.message.delete({where: {id: String(id)}});
    res.status(204).send();
};


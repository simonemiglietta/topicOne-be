import {Request, Response} from 'express';
import {prisma} from '../prisma';
import {CreateMessageInput} from "../types/message.type";
import {NotFoundException} from "../exceptions/notfound.exception";
import {MessageService} from "../services/message.service";

export const getMessages = async (req: Request, res: Response) => {
    const messages = await prisma.message.findMany();
    res.json(messages);
};

export const createMessage = (messageService: MessageService) => async (req: Request<{}, {}, CreateMessageInput>, res: Response) => {
    const {content, email, threadId} = req.body;
    const thread = await prisma.thread.findUnique({where: {id: threadId}});
    if (!thread) {
        throw new NotFoundException('Thread', threadId);
    }
    const message = await messageService.createMessage({email, content, threadId});
    return res.status(201).json(message);

};

export const deleteMessage = async (req: Request, res: Response) => {
    const {id} = req.params;
    await prisma.message.delete({where: {id: String(id)}});
    res.status(204).send();
};


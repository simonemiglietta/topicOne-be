import {Request, Response} from 'express';
import {prisma} from '../prisma';
import {CreateMessageInput} from "../types/message.type";

export const getMessages = async (req: Request, res: Response) => {
    const messages = await prisma.message.findMany();
    res.json(messages);
};

export const createMessage = async (
    req: Request<{}, {}, CreateMessageInput>,
    res: Response) => {
    const {content, email} = req.body;
    const newMsg = await prisma.message.create({data: {content, email}});
    res.status(201).json(newMsg);
};

export const deleteMessage = async (req: Request, res: Response) => {
    const {id} = req.params;
    await prisma.message.delete({where: {id: Number(id)}});
    res.status(204).send();
};

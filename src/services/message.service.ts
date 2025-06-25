import {prisma} from '../prisma';
import {MessageExtractor} from "../entities/extractor.entity";

interface CreateMessageData {
    email: string;
    content: string;
    threadId: string;
}

export const createMessage = async ({ email, content, threadId }: CreateMessageData) => {
    const message = await prisma.message.create({
        data: {
            email,
            content,
            thread: {
                connect: { id: threadId },
            },
        },
    });

    (async () => {
        const keywords = new MessageExtractor(content).extractKeywords();
        await prisma.message.update({
            where: { id: message.id },
            data: { keywords: keywords.join(',') },
        });
    })().catch(console.error);

    return message;
};

import {prisma} from '../prisma';
import {MessageExtractor} from "../entities/extractor.entity";
import {MessageService} from "./message.service";

interface CreateThreadData {
    email: string;
    content: string;
    subject: string;
}

export class ThreadService {
    constructor(
        protected messageService: MessageService
    ) {
    }

    createThread = async ({email, content, subject}: CreateThreadData) => {
        const thread = await prisma.thread.create({
            data: {
                subject,
            },
        });

        await this.messageService.createMessage({email, content, threadId: thread.id});

        (async () => {
            const keywords = new MessageExtractor().extractKeywords(content);
            await prisma.thread.update({
                where: {id: thread.id},
                data: {keywords: keywords.join(',')},
            });
        })().catch(console.error);

        return thread;
    };
}



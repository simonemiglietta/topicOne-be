import {prisma} from '../prisma';
import {eventBus, Events} from "../events/eventBus";
import {IKeywordExtractor} from "../interfaces/extractor.interface";

interface CreateMessageData {
    email: string;
    content: string;
    threadId: string;
}

export class MessageService {
    constructor(
        protected iKeywordExtractor: IKeywordExtractor
    ) {
    }

    createMessage = async ({email, content, threadId}: CreateMessageData) => {
        const message = await prisma.message.create({
            data: {
                email,
                content,
                thread: {
                    connect: {id: threadId},
                },
            },
        });
        eventBus.emit(Events.MessageKeywordsUpdate, message, this.iKeywordExtractor);

        return message;
    };

}

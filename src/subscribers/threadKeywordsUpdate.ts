import {eventBus, Events} from '../events/eventBus';
import {prisma} from '../prisma';
import {IKeywordExtractor} from "../interfaces/extractor.interface";

eventBus.on(Events.MessageKeywordsUpdate, async (message, iKeywordExtractor: IKeywordExtractor) => {

    const messages_in_thread = await prisma.message.findMany({where: {threadId: message.threadId}})
    const keywords = messages_in_thread
        .flatMap(m =>
            m.keywords
                ? m.keywords.split(',').map(k => k.trim()).filter(Boolean)
                : []
        )
        .join(' ');
    const updatedKeywords = iKeywordExtractor.extractKeywords(keywords)
    await prisma.thread.update({
        where: {id: message.threadId},
        data: {keywords: updatedKeywords.join(',')},
    });

    console.log(`Keywords aggiornate per thread ${message.threadId}`);
});

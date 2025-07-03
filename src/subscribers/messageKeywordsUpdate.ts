import {eventBus, Events} from '../events/eventBus';
import {prisma} from '../prisma';
import {IKeywordExtractor} from "../interfaces/extractor.interface";

eventBus.on(Events.MessageKeywordsUpdate, async (message, iKeywordExtractor: IKeywordExtractor) => {
    const keywords = iKeywordExtractor.extractKeywords(message.content);

    await prisma.message.update({
        where: {id: message.id},
        data: {keywords: keywords.join(',')},
    });

    console.log(`Keywords aggiornate per message ${message.id}`);
});

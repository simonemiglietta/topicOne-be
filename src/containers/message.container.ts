// container.ts
import {MessageService} from "../services/message.service";
import {ThreadService} from "../services/thread.service";
import {IKeywordExtractor} from "../interfaces/extractor.interface";


export class MessageContainer {
    messageService: MessageService;
    threadService: ThreadService;
    keywordExtractor: IKeywordExtractor;

    constructor(messageService: MessageService, threadService: ThreadService, keywordExtractor: IKeywordExtractor) {
        this.messageService = messageService;
        this.threadService = threadService;
        this.keywordExtractor = keywordExtractor;
    }
}

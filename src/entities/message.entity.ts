import {IKeywordExtractor} from "../interfaces/extractor.interface";
export class MessageEntity {
    constructor(
        public id: string,
        public content: string,
        public email: string,
        public threadId?: string
    ) {}
}
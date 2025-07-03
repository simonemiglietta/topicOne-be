"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventBus_1 = require("../events/eventBus");
const prisma_1 = require("../prisma");
eventBus_1.eventBus.on(eventBus_1.Events.MessageKeywordsUpdate, (message, iKeywordExtractor) => __awaiter(void 0, void 0, void 0, function* () {
    const messages_in_thread = yield prisma_1.prisma.message.findMany({ where: { threadId: message.threadId } });
    const keywords = messages_in_thread
        .flatMap(m => m.keywords
        ? m.keywords.split(',').map(k => k.trim()).filter(Boolean)
        : [])
        .join(' ');
    const updatedKeywords = iKeywordExtractor.extractKeywords(keywords);
    yield prisma_1.prisma.thread.update({
        where: { id: message.threadId },
        data: { keywords: updatedKeywords.join(',') },
    });
    console.log(`Keywords aggiornate per thread ${message.threadId}`);
}));
//# sourceMappingURL=threadKeywordsUpdate.js.map
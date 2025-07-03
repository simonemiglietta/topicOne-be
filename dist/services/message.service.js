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
exports.MessageService = void 0;
const prisma_1 = require("../prisma");
const eventBus_1 = require("../events/eventBus");
class MessageService {
    constructor(iKeywordExtractor) {
        this.iKeywordExtractor = iKeywordExtractor;
        this.createMessage = (_a) => __awaiter(this, [_a], void 0, function* ({ email, content, threadId }) {
            const message = yield prisma_1.prisma.message.create({
                data: {
                    email,
                    content,
                    thread: {
                        connect: { id: threadId },
                    },
                },
            });
            eventBus_1.eventBus.emit(eventBus_1.Events.MessageKeywordsUpdate, message, this.iKeywordExtractor);
            return message;
        });
    }
}
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map